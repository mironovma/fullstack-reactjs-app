import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Navbar.module.scss";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, seIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        seIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        seIsAuthModal(true);
    }, []);

    return (
        <div className={classNames(styles.navbar, {}, [])}>
            <div className={styles.links}>
                <Button theme={ButtonTheme.CLEAR} onClick={onShowModal}>
                    {t("Войти")}
                </Button>
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            </div>
        </div>
    );
};
