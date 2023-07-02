import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LanguageSwitcher } from "shared/ui/LanguageSwitcher/LanguageSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

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
            <button data-testid="sidebar-toggle" onClick={onToggle}>
                toggle
            </button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher className={styles.lang} />
            </div>
        </div>
    );
};
