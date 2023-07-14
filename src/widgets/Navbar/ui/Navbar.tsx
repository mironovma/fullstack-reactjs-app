import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Navbar.module.scss";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Modal } from "shared/ui/Modal/Modal";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, seIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        seIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(styles.navbar, {}, [])}>
            <div className={styles.links}>
                <Button theme={ButtonTheme.CLEAR} onClick={onToggleModal}>
                    {t("Войти")}
                </Button>
                <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure veniam corporis tempore accusantium quis ex architecto
                    deleniti totam. Expedita earum perferendis sed aspernatur
                    quidem officia?
                </Modal>
            </div>
        </div>
    );
};
