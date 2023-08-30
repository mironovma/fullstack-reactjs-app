import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./ArticleCodeBlockComponent.module.scss";

interface ArticleCodeBlockComponentProps {
    className?: string;
}

export const ArticleCodeBlockComponent = ({
    className,
}: ArticleCodeBlockComponentProps) => {
    const { t } = useTranslation();

    return (
        <div
            className={classNames(styles.ArticleCodeBlockComponent, {}, [
                className,
            ])}
        ></div>
    );
};
