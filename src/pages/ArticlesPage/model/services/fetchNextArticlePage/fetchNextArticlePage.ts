import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum,
} from "../../selectors/articlesPageSelectors";
import { articlesPageActions } from "../../slice/articlesPageSlice";
import { fetchArticleList } from "../fetchArticleList/fetchArticleList";

/**
 * Названия у asyncthunk'ов должны быть уникальные иначе будет ошибка!
 * Название, в смысле первый аргумент, который передаем в createAsyncThunk
 */
export const fetchNextArticlePage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>("articlesPage/fetchNextArticleList", async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;

    const hasMore = getArticlesPageHasMore(getState());
    const page = getArticlesPageNum(getState());
    const isLoading = getArticlesPageIsLoading(getState());

    if (hasMore && !isLoading) {
        dispatch(articlesPageActions.setPage(page + 1));
        dispatch(
            fetchArticleList({
                page: page + 1,
            })
        );
    }
});
