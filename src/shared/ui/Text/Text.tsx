import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Text.module.scss";
import { FunctionComponent } from "react";

export enum TextTheme {
    PRIMARY = "primary",
    ERROR = "error",
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

export const Text: FunctionComponent<TextProps> = ({
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
}) => {
    return (
        <div
            className={classNames(styles.Text, { [styles[theme]]: true }, [
                className,
            ])}
        >
            {title && <p className={styles.title}>{title}</p>}
            {text && <p className={styles.text}>{text}</p>}
        </div>
    );
};
