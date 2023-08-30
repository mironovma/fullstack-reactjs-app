import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "../../types/article";

export const fetchArticleById = createAsyncThunk<
    Article,
    string,
    ThunkConfig<string>
>("articleDetails/fetchArticleById", async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
        /**
         * Роут указываем /articles/ со вторым слешем, т.к. без него мы получаем
         * массив статей, а нам нужна одна конкретная статья.
         * Первым аргументом у асинк фанка принимаем строку - article id
         */
        const response = await extra.api.get<Article>(`/articles/${articleId}`);

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue("Something went wrong");
    }
});
