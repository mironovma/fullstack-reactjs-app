import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Navbar.module.scss";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(styles.navbar, {}, [className])}>
                <div className={styles.links}>
                    <Button theme={ButtonTheme.CLEAR} onClick={onLogout}>
                        {t("Выйти")}
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <Button theme={ButtonTheme.CLEAR} onClick={onShowModal}>
                    {t("Войти")}
                </Button>
                {isAuthModal && (
                    <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
                )}
            </div>
        </div>
    );
});
