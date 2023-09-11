import { memo, useMemo, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { LanguageSwitcher } from "shared/ui/LanguageSwitcher/LanguageSwitcher";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import styles from "./Sidebar.module.scss";

import { getSidebarItems } from "../../model/selectors/getSidebarItems";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { SidebarItemType } from "widgets/Sidebar/model/types/sidebar";
import { useSelector } from "react-redux";

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    /**
     * В каких случаях перерендеривается элемент:
     * 1) изменилось состояние (стейт)
     * 2) изменился хотя бы 1 пропс
     * 3) перерисовался родитель (этот пунтк как раз можно
     * предотвратить мемоизацией, как ниже)
     *
     * Ссылки у нас постоянны и их нет нужды перерисовывать.
     * Каждый рендер тратит мощности нашего компьютера: процессора и видеокарты.
     * А мемо лишь тратить какое-то кол-во памяти. Памяти у всех современных
     * устройств большое, а цпу не у всех.
     * Чтобы приложение быстро работало, нужно мемоизировать такие компоненты.
     *
     * Но не все нужно оборачивать в мемо. Например, у элементов, у которых есть
     * children, большая вложенная струкура, занимает очень много памяти. И хранить
     * такие компоненты дорого.
     */
    const itemList = useMemo(
        () =>
            sidebarItemsList.map((item: SidebarItemType) => (
                <SidebarItem
                    key={item.path}
                    item={item}
                    collapsed={collapsed}
                />
            )),
        [collapsed, sidebarItemsList]
    );
    /**
     * См. SidebarItem
     * Этот компонент полностью обернут в memo.
     *
     * Два варианта представлено, но проще и лучше
     * сразу в файле самого компонента обернуть его в мемо
     * const NameComponent = memo(() => {...});
     *
     * Хотя далее посмотрел. И тут в мемо обернуто и сам компонент.
     * При дебаге разницы нет, если оставить в мемо сам компонент.
     * Хз зачем, но сделал, как в уроке.
     */

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

            <div className={styles.items}>{itemList}</div>

            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher short={collapsed} className={styles.lang} />
            </div>
        </div>
    );
});
