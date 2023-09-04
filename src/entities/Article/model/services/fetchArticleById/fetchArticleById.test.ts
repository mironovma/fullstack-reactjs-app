import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchArticleById } from "./fetchArticleById";
import { ArticleBlockType, ArticleType } from "../../types/article";

const data = {
    id: "1",
    title: "Test",
    subtittle: "Subtittle",
    createdAt: "2023.08.04",
    views: 5447,
    type: [ArticleType.IT],
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

describe("fetchArticleById", () => {
    test("succes", async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk("1");

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });

    test("rejected", async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk("1");

        expect(result.meta.requestStatus).toBe("rejected");
    });
});
