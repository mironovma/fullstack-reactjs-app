import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import EyeIcon from "shared/assets/icons/eye-icon.svg";
import { classNames } from "shared/lib/classNames/classNames";
import { Card } from "shared/ui/Card/Card";
import { Icon } from "shared/ui/Icon/Icon";
import { Text } from "shared/ui/Text/Text";
import {
    Article,
    ArticleBlockType,
    ArticleTextBlock,
    ArticleView,
} from "../../model/types/article";
import styles from "./ArticleListItem.module.scss";
import { useHover } from "shared/lib/hooks/useHover";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Button } from "shared/ui/Button/Button";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
}

export const ArticleListItem = memo(
    ({ className, article, view }: ArticleListItemProps) => {
        const { t } = useTranslation();
        const navigate = useNavigate();

        const onOpenArticle = useCallback(() => {
            navigate(RoutePath.articles_detail + article.id);
        }, [article.id, navigate]);

        const types = (
            <Text text={article.type.join(", ")} className={styles.types} />
        );
        const views = (
            <>
                <Text text={String(article.views)} className={styles.views} />
                <Icon Svg={EyeIcon} />
            </>
        );

        /**
         * Пример работы кастомного хука useHover
         * shared/lib/hooks/useHover.ts
         */
        const [isHover, bindHover] = useHover();
        console.log(isHover, " shared/lib/hooks/useHover.ts");

        if (view === ArticleView.BIG) {
            const textBlock = article.blocks.find(
                (block) => block.type === ArticleBlockType.TEXT
            ) as ArticleTextBlock;
            return (
                <div
                    className={classNames(styles.ArticleListItem, {}, [
                        className,
                        styles[view],
                    ])}
                >
                    <Card className={styles.card}>
                        <div className={styles.header}>
                            <Avatar size={30} src={article.user.avatar} />
                            <Text
                                text={article.user.username}
                                className={styles.username}
                            />
                            <Text
                                text={article.createdAt}
                                className={styles.date}
                            />
                        </div>
                        <Text title={article.title} className={styles.title} />
                        {types}
                        <img
                            src={article.img}
                            alt={article.title}
                            className={styles.img}
                        />
                        {!!textBlock && (
                            <ArticleTextBlockComponent
                                block={textBlock}
                                className={styles.textBlock}
                            />
                        )}
                        <div className={styles.footer}>
                            <Button onClick={onOpenArticle}>
                                {t("Читать далее") + "..."}
                            </Button>
                            {views}
                        </div>
                    </Card>
                </div>
            );
        }

        return (
            <div
                // Пример работы useHover. Удалить
                {...bindHover}
                className={classNames(styles.ArticleListItem, {}, [
                    className,
                    styles[view],
                ])}
            >
                <Card className={styles.card} onClick={onOpenArticle}>
                    <div className={styles.imageWrapper}>
                        <img
                            src={article.img}
                            alt={article.title}
                            className={styles.img}
                        />
                        <Text
                            text={article.createdAt}
                            className={styles.date}
                        />
                    </div>
                    <div className={styles.infoWrapper}>
                        {types}
                        {views}
                    </div>
                    <Text text={article.title} className={styles.title} />
                </Card>
            </div>
        );
    }
);
