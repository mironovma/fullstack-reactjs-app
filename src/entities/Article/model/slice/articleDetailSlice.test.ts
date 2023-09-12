import { ArticleDetailsSchema } from "../types/articleDetailsSchema";
import { articleDetailsReducer } from "./articleDetailSlice";
import { fetchArticleById } from "../services/fetchArticleById/fetchArticleById";
import { Article, ArticleBlockType, ArticleType } from "../types/article";

const data: Article = {
    id: "1",
    title: "Test",
    subtittle: "Subtittle",
    createdAt: "2023.08.04",
    views: 5447,
    type: [ArticleType.IT],
    user: {
        id: "1",
        username: "admin",
    },
    img: "https://lh3.googleusercontent.com/rQiOXCi1evWhjOOOCaoM5hWmE3RUMbKqaqcV70Jf0VCAzH5pkAUsYcvRqFMzdNjg8UsJP9P0f9VYQ32eppTtTHo8YQ=w640-h400-e365-rj-sc0x00ffffff",
    blocks: [
        {
            id: 1,
            type: ArticleBlockType.TEXT,
            paragraphs: ["Hello world"],
            title: "title",
        },
    ],
};

describe("articleDetail slice", () => {
    test("test article service pending", () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
        };
        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.pending
            )
        ).toStrictEqual({
            isLoading: true,
            error: undefined,
        });
    });

    test("test article service fulfilled", () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
        };
        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.fulfilled(data, "1", "")
            )
        ).toStrictEqual({
            isLoading: false,
            data,
        });
    });
});
