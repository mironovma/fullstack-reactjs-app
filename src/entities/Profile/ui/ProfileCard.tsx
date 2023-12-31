import { useTranslation } from "react-i18next";
import { Mods, classNames } from "shared/lib/classNames/classNames";
import styles from "./ProfileCard.module.scss";

import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { Input } from "shared/ui/Input/Input";
import { Profile } from "../model/types/profile";
import { Loader } from "shared/ui/Loader/Loader";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Currency, CurrencySelect } from "entities/Currency";
import { Country } from "entities/Country/model/types/Country";
import { CountrySelect } from "entities/Country";

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean | undefined;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency?: Currency) => void;
    onChangeCountry?: (country?: Country) => void;
}

export const ProfileCard = ({
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
}: ProfileCardProps) => {
    const { t } = useTranslation("profile");

    if (isLoading) {
        return (
            <div
                className={classNames(styles.ProfileCard, {}, [
                    className,
                    styles.loading,
                ])}
            >
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div
                className={classNames(styles.ProfileCard, {}, [
                    className,
                    styles.error,
                ])}
            >
                <Text
                    title={t("Произошла ошибка при загрузке профиля")}
                    text={t("Попробуйте обновить страницу")}
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods: Mods = {
        [styles.editing]: !readonly,
    };

    return (
        <div className={classNames(styles.ProfileCard, mods, [className])}>
            <div className={styles.data}>
                {data?.avatar && (
                    <div className={styles.avatarWrapper}>
                        <Avatar src={data?.avatar} />
                    </div>
                )}

                <span>{t("Ваше имя")}</span>
                <Input
                    value={data?.firstname}
                    placeholder={t("Ваше имя")}
                    className={styles.input}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />

                <span>{t("Ваша фамилия")}</span>
                <Input
                    value={data?.lastname}
                    placeholder={t("Ваша фамилия")}
                    className={styles.input}
                    onChange={onChangeLastname}
                    readonly={readonly}
                />

                <span>{t("Ваш возраст")}</span>
                <Input
                    value={data?.age}
                    placeholder={t("Ваш возраст")}
                    className={styles.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                    type="number"
                />

                <span>{t("Ваш город")}</span>
                <Input
                    value={data?.city}
                    placeholder={t("Ваш город")}
                    className={styles.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />

                <span>{t("Ваш псевдоним")}</span>
                <Input
                    value={data?.username}
                    placeholder={t("Ваш псевдоним")}
                    className={styles.input}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />

                <span>{t("Ваш аватар")}</span>
                <Input
                    value={data?.avatar}
                    placeholder={t("Ваш аватар")}
                    className={styles.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />

                <span>{t("Ваша валюта")}</span>
                <CurrencySelect
                    value={data?.currency}
                    className={styles.input}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />

                <span>{t("Ваша страна")}</span>
                <CountrySelect
                    value={data?.country}
                    className={styles.input}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
