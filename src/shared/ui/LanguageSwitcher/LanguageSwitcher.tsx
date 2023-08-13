import { classNames } from "shared/lib/classNames/classNames";
import styles from "./LanguageSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "../Button/Button";
import { memo } from "react";

interface LanguageSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LanguageSwitcher = memo(
    ({ className, short }: LanguageSwitcherProps) => {
        const { t, i18n } = useTranslation();

        const toggle = () => {
            i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
        };

        return (
            <Button
                onClick={toggle}
                theme={ButtonTheme.CLEAR}
                className={classNames(styles.LanguageSwitcher, {}, [className])}
            >
                {t(short ? "Короткий язык" : "Язык")}
            </Button>
        );
    }
);
