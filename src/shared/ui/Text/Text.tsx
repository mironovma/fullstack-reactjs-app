import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Text.module.scss";
import { ReactNode, memo } from "react";

export enum TextTheme {
    PRIMARY = "primary",
    ERROR = "error",
}

export enum TextSize {
    S = "small",
    M = "medium",
    L = "large",
}

export enum TextAlign {
    LEFT = "left",
    CENTER = "center",
    RIGHT = "right",
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    size?: TextSize;
    align?: TextAlign;
    children?: ReactNode;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        size = TextSize.M,
        align = TextAlign.LEFT,
    } = props;
    return (
        <div
            className={classNames(styles.Text, { [styles[theme]]: true }, [
                className,
                styles[size],
                styles[align],
            ])}
        >
            {title && <p className={styles.title}>{title}</p>}
            {text && <p className={styles.text}>{text}</p>}
        </div>
    );
});
