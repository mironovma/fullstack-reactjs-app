import { ReactNode, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(styles.applink, {}, [
                className,
                styles[theme],
                styles.mainLink,
            ])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
