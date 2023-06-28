import { BugButton } from "app/providers/ErrorBoundary";
import { useTranslation } from "react-i18next";

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            {/**
             * BugButton только для иммитации выброса ошибки.
             */}
            <BugButton />
            <div>{t("Главная страница")}</div>
        </div>
    );
};

export default MainPage;
