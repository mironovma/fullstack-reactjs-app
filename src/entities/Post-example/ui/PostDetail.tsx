import { ReactNode, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Loader } from "shared/ui/Loader/Loader";
import { fetchPostData } from "../model/services/fetchPostData";
import styles from "./PostDetail.module.scss";
import { Text, TextAlign, TextSize } from "shared/ui/Text/Text";

interface PostDetailProps {
    className?: string;
}

export const PostDetail = memo(({ className }: PostDetailProps) => {
    const { t } = useTranslation();
    const { isLoading, isError, data } = fetchPostData.useGetPostDataQuery("1");

    let content: ReactNode;

    if (isLoading) {
        content = <Loader />;
    }

    if (isError) {
        content = <>{t("Произошла ошибка при получении данных")}</>;
    }

    if (data) {
        content = (
            <>
                <Text
                    title={data.title}
                    align={TextAlign.CENTER}
                    size={TextSize.L}
                />
                <Text text={data.subtittle} align={TextAlign.CENTER} />
            </>
        );
    }

    return (
        <div className={classNames(styles.PostDetail, {}, [className])}>
            {content}
        </div>
    );
});
