import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import {
    DynamicModuleLoader,
    ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { getAddCommentFormText } from "../../model/selectors/addCommentFormSelectors";
import {
    addCommentFormActions,
    addCommentFormReducer,
} from "../../model/slice/addCommentFormSlice";
import styles from "./AddCommentForm.module.scss";

interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducerList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(
    ({ className, onSendComment }: AddCommentFormProps) => {
        const { t } = useTranslation();

        const dispatch = useAppDispatch();

        const text = useSelector(getAddCommentFormText);

        const onCommentTextChange = useCallback(
            (value: string) => {
                dispatch(addCommentFormActions.setText(value));
            },
            [dispatch]
        );

        /**
         * Чтобы получить из инпута текст, сделаем обертку
         */
        const onSendHandler = useCallback(() => {
            onSendComment(text || "");
            onCommentTextChange("");
        }, [onCommentTextChange, onSendComment, text]);

        /**
         * Ничего не передаем аргументом. Почему? См. комментарий
         * к сервису sendComment
         */
        /**
         * Т.к. мы пересмотрели логику и sendComment заменили на
         * addCommentForArticle, а функцию принимаем теперь
         * аргументом из страницы статьи ArticleDetailsPage.
         */
        // const onSendComment = useCallback(() => {
        // dispatch(sendComment());
        // }, [dispatch]);

        return (
            <DynamicModuleLoader reducers={reducers}>
                <div
                    className={classNames(styles.AddCommentForm, {}, [
                        className,
                    ])}
                >
                    <Input
                        placeholder={t("Введите комментарий")}
                        value={text}
                        onChange={onCommentTextChange}
                        className={styles.input}
                    />
                    <Button onClick={onSendHandler}>{t("Отправить")}</Button>
                </div>
            </DynamicModuleLoader>
        );
    }
);

export default AddCommentForm;
