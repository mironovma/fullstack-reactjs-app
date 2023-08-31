import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "../types/post";

export const fetchPostData = createApi({
    reducerPath: "post/fetchPostData",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
    endpoints: (builder) => ({
        getPostData: builder.query<Post, string>({
            query: (id) => `/articles/${id}`,
        }),
    }),
});
