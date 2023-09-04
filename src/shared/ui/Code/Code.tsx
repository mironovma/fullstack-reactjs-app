import { memo, useCallback } from "react";
import CopyIcon from "shared/assets/icons/copy-icon.svg";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "../Button/Button";
import styles from "./Code.module.scss";

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo(({ className, text }: CodeProps) => {
    // Копирование текста
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(styles.Code, {}, [className])}>
            <Button
                onClick={onCopy}
                className={styles.copyBtn}
                theme={ButtonTheme.CLEAR}
            >
                <CopyIcon className={styles.copyIcon} />
            </Button>
            <code>{text}</code>
        </pre>
    );
});
