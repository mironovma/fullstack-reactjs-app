import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ArticleDetailsSchema } from "../types/articleDetailsSchema";
import { fetchArticleById } from "../services/fetchArticleById/fetchArticleById";
import { Article } from "../types/article";

const initialState: ArticleDetailsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const articleDetailSlice = createSlice({
    name: "articleDetails",
    initialState,
    reducers: {},
    /**
     * Экстра редюсеры. В них добавляем обработку сценариев
     * для созданных нами сервисов. В этом случае fetchArticleById.
     * Состояние pending, fulfilled, rejected
     */
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchArticleById.fulfilled,
                (state, action: PayloadAction<Article>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                }
            )
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articleDetailsActions } = articleDetailSlice;
export const { reducer: articleDetailsReducer } = articleDetailSlice;
