import { ArticleDetails } from "entities/Article";
import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./ArticleDetailsPage.module.scss";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation("article-details");
    const { id } = useParams<{ id: string }>();

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
        <div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
};

export default memo(ArticleDetailsPage);
