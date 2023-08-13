import { profileReducer } from "entities/Profile";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import {
    DynamicModuleLoader,
    ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const reducers: ReducerList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage: FunctionComponent<ProfilePageProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames("", {}, [className])}>
                {t("Profile Page")}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
