import { useTranslation } from "react-i18next";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { SidebarItemType } from "../../model/Items";
import styles from "./SidebarItem.module.scss";
import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();

    return (
        <AppLink
            className={classNames(styles.item, {
                [styles.collapsed]: collapsed,
            })}
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
        >
            <item.Icon className={styles.icon} />
            <span className={styles.link}>{t(item.text)}</span>
        </AppLink>
    );
});
