import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getArticleDetailsData } from "entities/Article/model/selectors/articleDetails";
import { getUserAuthData } from "entities/User";
import { getAddCommentFormText } from "../selectors/addCommentFormSelectors";
import { addCommentFormActions } from "../slice/addCommentFormSlice";

export const sendComment = createAsyncThunk<Comment, void, ThunkConfig<string>>(
    "addCommentForm/sendComment",
    async (_, thunkApi) => {
        const { extra, dispatch, rejectWithValue, getState } = thunkApi;

        // Получаем данные о пользователел из стейта, чтобы к комментарию привязать его id
        const userData = getUserAuthData(getState());
        // Получаем текст комментария из стейта
        const text = getAddCommentFormText(getState());
        // Получаем id статьи к которой комментарий будем записывать
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) {
            return rejectWithValue("no data");
        }

        try {
            /**
             * Т.к. мы получаем все значения (id статьи, id пользователя
             * и сам текст из инпута (у нас есть редюсер, котрый идет в onChange инпута
             * и записывает текст в стейт)) здесь, т.е. в сервисе,
             * нам нет необходимости принимать текст комментария аргументом в компоненте.
             * Хотя и так тоже можно сделать. Тут два варианта, обе верные.
             */
            const response = await extra.api.post<Comment>("/comments", {
                articleId: article.id,
                userId: userData.id,
                text,
            });

            if (!response.data) {
                throw new Error();
            }

            // Чтобы очищать инпут после отправки запроса
            dispatch(addCommentFormActions.setText(""));

            return response.data;
        } catch (e) {
            return rejectWithValue("Something went wrong");
        }
    }
);
