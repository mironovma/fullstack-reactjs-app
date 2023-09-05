import { ArticleDetails } from "entities/Article";
import { CommentList } from "entities/Comment";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import {
    DynamicModuleLoader,
    ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { Text } from "shared/ui/Text/Text";
import {
    // getArticleCommentsError,
    getArticleCommentsIsLoading,
} from "../../model/selectors/comments";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import {
    articleDetailsCommentsReducer,
    getArticleComments,
} from "../../model/slices/articleDetailsCommentsSlice";
import styles from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducerList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation("article-details");
    const { id } = useParams<{ id: string }>();

    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    // const commentsError = useSelector(getArticleCommentsError);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return (
            <div
                className={classNames(styles.ArticleDetailsPage, {}, [
                    className,
                ])}
            >
                {t("Такой статьи не существует или что-то пошло не так.")}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div
                className={classNames(styles.ArticleDetailsPage, {}, [
                    className,
                ])}
            >
                <ArticleDetails id={id} />
                <Text
                    className={styles.commentTitle}
                    title={t("Комментарии")}
                />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
