import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LanguageSwitcher } from "shared/ui/LanguageSwitcher/LanguageSwitcher";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import HomeIcon from "shared/assets/icons/home.svg";
import AboutIcon from "shared/assets/icons/about-us.svg";
import { useTranslation } from "react-i18next";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(
                styles.Sidebar,
                { [styles.collapsed]: collapsed },
                [className]
            )}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={styles.collapsedBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? ">" : "<"}
            </Button>
            <div className={styles.items}>
                <div>
                    <AppLink
                        className={styles.item}
                        theme={AppLinkTheme.SECONDARY}
                        to={RoutePath.main}
                    >
                        <HomeIcon className={styles.icon} />
                        <span className={styles.link}>{t("Главная")}</span>
                    </AppLink>
                </div>

                <div>
                    <AppLink
                        className={styles.item}
                        theme={AppLinkTheme.SECONDARY}
                        to={RoutePath.about}
                    >
                        <AboutIcon className={styles.icon} />
                        <span className={styles.link}>{t("О нас")}</span>
                    </AppLink>
                </div>
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher short={collapsed} className={styles.lang} />
            </div>
        </div>
    );
};
