import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./ProfileCard.module.scss";
import { useSelector } from "react-redux";
import { getProfileData } from "../model/selectors/getProfileData/getProfileData";
import { getProfileErorr } from "../model/selectors/getProfileError/getProfileError";
import { getProfileIsLoading } from "../model/selectors/getProfileIsLoading/getProfileIsLoading";

import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Loader } from "shared/ui/Loader/Loader";

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation("profile");
    const data = useSelector(getProfileData);
    const erorr = useSelector(getProfileErorr);
    const isLoading = useSelector(getProfileIsLoading);

    // if (isLoading) {
    //     return <Loader />;
    // }

    return (
        <div className={classNames(styles.ProfileCard, {}, [className])}>
            <div className={styles.header}>
                <Text title={t("Профиль")} />
                <Button
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    className={styles.editBtn}
                >
                    {t("Редактировать")}
                </Button>
            </div>
            <div className={styles.data}>
                <span>{t("Ваше имя")}</span>
                <Input
                    value={data?.firstname}
                    placeholder={t("Ваше имя")}
                    className={styles.input}
                />
                <span>{t("Ваша фамилия")}</span>
                <Input
                    value={data?.lastname}
                    placeholder={t("Ваше имя")}
                    className={styles.input}
                />
            </div>
        </div>
    );
};
