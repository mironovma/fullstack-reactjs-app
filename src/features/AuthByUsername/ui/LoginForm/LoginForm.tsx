import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
    loginActions,
    loginReducer,
} from "features/AuthByUsername/model/slice/loginSlice";
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./LoginForm.module.scss";

import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import {
    DynamicModuleLoader,
    ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducerList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

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

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === "fulfilled") {
            onSuccess();
        }
    }, [dispatch, onSuccess, password, username]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;
