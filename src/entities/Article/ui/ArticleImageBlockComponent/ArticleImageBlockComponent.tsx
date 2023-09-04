import { classNames } from "shared/lib/classNames/classNames";
import styles from "./ArticleImageBlockComponent.module.scss";
import { memo } from "react";
import { ArticleImageBlock } from "../../model/types/article";
import { Text, TextAlign } from "shared/ui/Text/Text";

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
    ({ className, block }: ArticleImageBlockComponentProps) => {
        return (
            <div
                className={classNames(styles.ArticleImageBlockComponent, {}, [
                    className,
                ])}
            >
                <img
                    className={styles.img}
                    src={block.src}
                    alt={block.title ?? block.src}
                />
                {block.title && (
                    <Text text={block.title} align={TextAlign.CENTER} />
                )}
            </div>
        );
    }
);
