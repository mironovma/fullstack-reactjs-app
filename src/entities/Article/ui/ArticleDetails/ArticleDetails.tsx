import { memo, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import {
    DynamicModuleLoader,
    ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Text, TextAlign, TextSize, TextTheme } from "shared/ui/Text/Text";
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from "../../model/selectors/articleDetails";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { articleDetailsReducer } from "../../model/slice/articleDetailSlice";
import styles from "./ArticleDetails.module.scss";

import CalendarIcon from "shared/assets/icons/calendar.svg";
import EyeIcon from "shared/assets/icons/eye-icon.svg";
import { Icon } from "shared/ui/Icon/Icon";
import { ArticleBlock, ArticleBlockType } from "../../model/types/article";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";

const reducers: ReducerList = {
    articleDetails: articleDetailsReducer,
};

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return (
                    <ArticleCodeBlockComponent
                        block={block}
                        className={styles.block}
                        key={block.id}
                    />
                );
            case ArticleBlockType.IMAGE:
                return (
                    <ArticleImageBlockComponent
                        block={block}
                        className={styles.block}
                        key={block.id}
                    />
                );
            case ArticleBlockType.TEXT:
                return (
                    <ArticleTextBlockComponent
                        block={block}
                        className={styles.block}
                        key={block.id}
                    />
                );
            default:
                return null;
        }
    }, []);

    useEffect(() => {
        if (__PROJECT__ !== "storybook") {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    /**
     * В переменную content, в зависимости от состояния
     * (pending, fulfilled, rejected) будем помещать контент
     */
    let content;

    if (isLoading) {
        content = (
            <div>
                <Skeleton
                    className={styles.avatar}
                    width={200}
                    height={200}
                    border="50%"
                />
                <Skeleton className={styles.title} width={300} height={32} />
                <Skeleton className={styles.skeleton} width={350} height={24} />
                <Skeleton
                    className={styles.skeleton}
                    width="100%"
                    height={200}
                />
                <Skeleton
                    className={styles.skeleton}
                    width="100%"
                    height={200}
                />
            </div>
        );
    } else if (error) {
        content = (
            <Text
                title={t("Произошла ошибка при загрузке статьи")}
                align={TextAlign.CENTER}
                theme={TextTheme.ERROR}
            />
        );
    } else {
        content = (
            <>
                <div className={styles.avatarWrapper}>
                    {/* HEADER-START */}
                    <Avatar
                        size={200}
                        src={article?.img}
                        className={styles.avatar}
                    />
                </div>
                <Text
                    className={styles.title}
                    title={article?.title}
                    text={article?.subtittle}
                    size={TextSize.L}
                />
                <div className={styles.articleInfo}>
                    <Icon Svg={EyeIcon} className={styles.icon} />
                    <Text text={String(article?.views)} />
                </div>
                <div className={styles.articleInfo}>
                    <Icon Svg={CalendarIcon} className={styles.icon} />
                    <Text text={article?.createdAt} />
                </div>
                {/* HEADER-END */}
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(styles.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
