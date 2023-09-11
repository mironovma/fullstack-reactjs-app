import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getArticleDetailsData } from "entities/Article/model/selectors/articleDetails";
import { getUserAuthData } from "entities/User";
import { fetchCommentsByArticleId } from "../fetchCommentsByArticleId/fetchCommentsByArticleId";

/**
 * См. изначально sendComment.ts depricated в проекте.
 * Тут сделали этот сервис более изолированным.
 */

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>("articleDetails/addCommentForArticle", async (text, thunkApi) => {
    const { extra, dispatch, rejectWithValue, getState } = thunkApi;

    // Получаем данные о пользователел из стейта, чтобы к комментарию привязать его id
    const userData = getUserAuthData(getState());
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

        /**
         * Чтобы новые комментарии сразу отображались после отправки.
         * Есть два варианта: запросить новые комментарии либо добавлять в стейт новый комментарий
         * Будем запрашивать заново все комментарии (лучшая практика, т.к.
         * можем в стейт добавить комменты и увидим у себя свой коммент, а, в то же время,
         * одновременно другой пользователь может писать комментарии, но у вас они не будут отображаться; поэтому
         * запрашиваем все комменты заново)
         */
        dispatch(fetchCommentsByArticleId(article.id));

        return response.data;
    } catch (e) {
        return rejectWithValue("Something went wrong");
    }
});
