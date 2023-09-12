import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Article, ArticleView } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import styles from "./ArticleList.module.scss";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((_, index) => (
            <ArticleListItemSkeleton
                className={styles.card}
                key={index}
                view={view}
            />
        ));
};

export const ArticleList = memo(
    ({
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
    }: ArticleListProps) => {
        const { t } = useTranslation();

        if (isLoading) {
            return (
                <div
                    className={classNames(styles.ArticleList, {}, [
                        className,
                        styles[view],
                    ])}
                >
                    {getSkeletons(view)}
                </div>
            );
        }

        const renderArticles = (article: Article) => {
            return (
                <ArticleListItem
                    article={article}
                    view={view}
                    className={styles.card}
                    key={article.id}
                />
            );
        };

        return (
            <div
                className={classNames(styles.ArticleList, {}, [
                    className,
                    styles[view],
                ])}
            >
                {articles.length > 0
                    ? articles.map(renderArticles)
                    : t("Статьи не найдены или произошла ошибка")}
            </div>
        );
    }
);
