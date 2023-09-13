import { memo } from "react";
import ListIcon from "shared/assets/icons/list-btn.svg";
import TiledIcon from "shared/assets/icons/tiled-btn.svg";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";
import { ArticleView } from "../../model/types/article";
import styles from "./ArticleViewSelector.module.scss";

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        Icon: TiledIcon,
    },
    {
        view: ArticleView.BIG,
        Icon: ListIcon,
    },
];

export const ArticleViewSelector = memo(
    ({ className, view, onViewClick }: ArticleViewSelectorProps) => {
        /**
         * Своего рода делаем замыкание.
         * См. передачу этой функции далее в компонент ниже.
         */
        const onClick = (newView: ArticleView) => {
            return () => {
                onViewClick?.(newView);
            };
        };

        return (
            <div
                className={classNames(styles.ArticleViewSelector, {}, [
                    className,
                ])}
            >
                {viewTypes.map((viewType) => (
                    <Button
                        key={viewType.view}
                        theme={ButtonTheme.CLEAR}
                        onClick={onClick(viewType.view)}
                    >
                        <Icon
                            Svg={viewType.Icon}
                            className={classNames("", {
                                [styles.notSelected]: viewType.view !== view,
                            })}
                        />
                    </Button>
                ))}
            </div>
        );
    }
);
