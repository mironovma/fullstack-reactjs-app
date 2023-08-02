import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "features/AuthByUsername/model/slice/loginSlice";
import { getLoginState } from "features/AuthByUsername/model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./LoginForm.module.scss";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { username, password, isLoading, error } = useSelector(getLoginState);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch]
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch]
    );

    const onLoginClick = useCallback(() => {
        // @ts-ignore
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <Text title={t("Форма авторизации")} />

            {error && (
                <Text
                    text={t("Неправильный логин или пароль")}
                    theme={TextTheme.ERROR}
                />
            )}

            <Input
                autofocus={true}
                type="text"
                className={styles.input}
                placeholder={t("Введите логин")}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type="text"
                className={styles.input}
                placeholder={t("Введите пароль")}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={styles.loginBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t("Войти")}
            </Button>
        </div>
    );
});
