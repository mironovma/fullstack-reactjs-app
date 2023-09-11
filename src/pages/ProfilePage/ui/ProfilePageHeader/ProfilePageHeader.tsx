import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./ProfilePageHeader.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Text } from "shared/ui/Text/Text";
import { useSelector } from "react-redux";
import {
    getProfileData,
    getProfileReadonly,
    profileActions,
    updateProfileData,
} from "entities/Profile";
import { useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { getUserAuthData } from "entities/User";

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation("profile");

    /**
     * Сравниваем стейт авторизованного пользователя и
     * стейт профиля на странице которого находимся.
     * Если одинаковые, то можем редактировать свой прпофиль,
     * если нет, то убираем кнопку редактирования.
     *
     * Можно было бы сделать отдельный селектор на такой случай.
     * Использовать два этих селекта реселектом.
     */
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const dispatch = useAppDispatch();

    const readonly = useSelector(getProfileReadonly);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(styles.ProfilePageHeader, {}, [className])}>
            <Text title={t("Профиль")} />

            {canEdit && (
                <div className={styles.editBtn}>
                    {readonly ? (
                        <Button
                            theme={ButtonTheme.BACKGROUND_INVERTED}
                            className={styles.editBtn}
                            onClick={onEdit}
                        >
                            {t("Редактировать")}
                        </Button>
                    ) : (
                        <>
                            <Button
                                theme={ButtonTheme.BACKGROUND_INVERTED}
                                className={styles.editBtn}
                                onClick={onSave}
                            >
                                {t("Сохранить")}
                            </Button>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                className={styles.editBtn}
                                onClick={onCancelEdit}
                            >
                                {t("Отменить")}
                            </Button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};
