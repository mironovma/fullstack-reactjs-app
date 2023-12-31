import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import {
    ProfileCard,
    ValidateProfileError,
    fetchProfileData,
    getProfileErorr,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    profileReducer,
} from "entities/Profile";
import { FunctionComponent, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import {
    DynamicModuleLoader,
    ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { Page } from "shared/ui/Page/Page";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";

const reducers: ReducerList = {
    profile: profileReducer,
};
interface ProfilePageProps {
    className?: string;
}

const ProfilePage: FunctionComponent<ProfilePageProps> = ({ className }) => {
    const { t } = useTranslation("profile");

    const dispatch = useAppDispatch();

    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const erorr = useSelector(getProfileErorr);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    // Достаем id профиля
    const { id } = useParams<{ id: string }>();

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t(
            "Серверная ошибка при сохранении"
        ),
        [ValidateProfileError.INCORECT_AGE]: t("Некорректный возраст"),
        [ValidateProfileError.INCORECT_COUNTRY]: t("Некорректный регион"),
        [ValidateProfileError.INCORECT_USER_DATA]: t(
            "Имя и фамилия обязательны"
        ),
        [ValidateProfileError.NO_DATA]: t("Данные не указаны"),
    };
    // Теперь с кастомным хуком + теперь можем получать разные профили по id:
    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });
    // Было:
    // useEffect(() => {
    //     if (__PROJECT__ !== "storybook") {
    // dispatch(fetchProfileData());
    //     }
    // }, [dispatch]);

    const onChangeFirstname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ firstname: value || "" }));
        },
        [dispatch]
    );

    const onChangeLastname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ lastname: value || "" }));
        },
        [dispatch]
    );

    const onChangeAge = useCallback(
        (value?: string) => {
            const validateValue = value?.replace(/\D+/gm, "");
            dispatch(
                profileActions.updateProfile({
                    age: Number(validateValue || 0),
                })
            );
        },
        [dispatch]
    );

    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ city: value || "" }));
        },
        [dispatch]
    );

    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ username: value || "" }));
        },
        [dispatch]
    );

    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ avatar: value || "" }));
        },
        [dispatch]
    );

    const onChangeCurrency = useCallback(
        (currency?: Currency) => {
            dispatch(
                profileActions.updateProfile({
                    currency: currency || Currency.RUB,
                })
            );
        },
        [dispatch]
    );

    const onChangeCountry = useCallback(
        (country?: Country) => {
            dispatch(
                profileActions.updateProfile({
                    country: country || Country.Russia,
                })
            );
        },
        [dispatch]
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames("", {}, [className])}>
                <ProfilePageHeader />
                {validateErrors?.length &&
                    validateErrors.map((err) => (
                        <Text
                            key={err}
                            theme={TextTheme.ERROR}
                            text={validateErrorTranslates[err]}
                        />
                    ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={erorr}
                    readonly={readonly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
