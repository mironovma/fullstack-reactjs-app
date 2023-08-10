import { Suspense } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./LoginModal.module.scss";
import { Modal } from "shared/ui/Modal/Modal";
import { LoginFormLazy } from "../LoginForm/LoginForm.lazy";
import { Loader } from "shared/ui/Loader/Loader";

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
    return (
        <Modal
            className={classNames(styles.LoginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy={true}
        >
            <Suspense fallback={<Loader />}>
                <LoginFormLazy />
            </Suspense>
        </Modal>
    );
};
