import {
    PayloadAction,
    createEntityAdapter,
    createSlice,
} from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { Article, ArticleView } from "entities/Article";
import { fetchArticleList } from "../services/fetchArticleList/fetchArticleList";
import { ArticlesPageSchema } from "../types/articlesPageSchema";
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from "shared/const/localstorage";

export const articlesAdapted = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapted.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapted.getInitialState()
);

export const articlesPageSlice = createSlice({
    name: "articlesPageSlice",
    initialState: articlesAdapted.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        error: undefined,
        view: ArticleView.SMALL,
        ids: [],
        entities: {},
        page: 1,
        hasMore: true,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            // При переключении view сохраняем это в local storage
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        initState: (state) => {
            /**
             * При первой загрузке страницы articles будем доставать
             * из local storage сохраненное значение view через наш
             * кастомный хук useInitEffect.
             *
             * Иначе значение view будет браться из селектора, где
             * берется либо значение из стейта либо (условие ИЛИ ||) инициализируется по дефолту
             * как tiled
             */
            const view = localStorage.getItem(
                ARTICLE_VIEW_LOCALSTORAGE_KEY
            ) as ArticleView;
            state.view = view;
            state.limit = view === ArticleView.BIG ? 4 : 9;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleList.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(
                fetchArticleList.fulfilled,
                (state, action: PayloadAction<Article[]>) => {
                    state.isLoading = false;
                    articlesAdapted.addMany(state, action.payload);
                    state.hasMore = action.payload.length > 0;
                }
            )
            .addCase(fetchArticleList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articlesPageActions, reducer: articlesPageReducer } =
    articlesPageSlice;
