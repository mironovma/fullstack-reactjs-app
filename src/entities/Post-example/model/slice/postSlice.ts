import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Post, PostSchema } from "../types/post";
import { fetchPostData } from "../services/fetchPostData";

const initialState: PostSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const postSlice = createSlice({
    name: "entites/postSlice",
    initialState,
    reducers: {},
    /**
     * Экстра редюсер при работе с RTK Query нужен, чтобы можно было сохранять
     * полученные данные с сервера в стейт.
     *
     * При использовании RTK Query, на самом деле, нет необходимости хранить
     * в стейте состояния isLoading, error и подобные.
     * Хотя error можно касомизировать и выводить осмысленные ошибки:
     * см. serialized error rtk query и fetchbasequeryerror rtk.
     *
     * data сохраняем  в стейт и делаем с ней что необходимо.
     */
    extraReducers: (builder) => {
        builder
            // pending состояние
            .addMatcher(
                fetchPostData.endpoints.getPostData.matchPending,
                (state) => {
                    state.error = undefined;
                    state.isLoading = true;
                }
            )
            // fulfilled
            .addMatcher(
                fetchPostData.endpoints.getPostData.matchFulfilled,
                (state, action: PayloadAction<Post>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                }
            )
            // rejected
            .addMatcher(
                fetchPostData.endpoints.getPostData.matchRejected,
                (state) => {
                    state.isLoading = false;
                    /**
                     * RTK Query создает и ошибки, которые можно
                     * записывать в стейт и использовать их.
                     *
                     * Но нужно типизировать их в самом апи сервисе
                     */
                    // state.error = action.payload;
                }
            );
    },
});

export const { actions: postActions } = postSlice;
export const { reducer: postReducer } = postSlice;
