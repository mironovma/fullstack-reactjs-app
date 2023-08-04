import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Text.module.scss";
import { FunctionComponent } from "react";

export enum TextTheme {
    PRIMARY = "primary",
    ERROR = "error",
}

export enum TextSize {
    S = "small",
    M = "medium",
    L = "large",
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    size?: TextSize;
}

export const Text: FunctionComponent<TextProps> = ({
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    size = TextSize.M,
}) => {
    return (
        <div
            className={classNames(styles.Text, { [styles[theme]]: true }, [
                className,
                styles[size],
            ])}
        >
            {title && <p className={styles.title}>{title}</p>}
            {text && <p className={styles.text}>{text}</p>}
        </div>
    );
};
