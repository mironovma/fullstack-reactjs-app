import { StateSchema } from "app/providers/StoreProvider";
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from "./articleDetails";

describe("articleDetails", () => {
    test("should return data", () => {
        const data = { id: "1", title: "title" };
        const state: DeepPartial<StateSchema> = { articleDetails: { data } };
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });

    test("empty state should return undefined", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });

    test("should return error", () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: { error: "err" },
        };
        expect(getArticleDetailsError(state as StateSchema)).toEqual("err");
    });

    test("should return loading", () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: { isLoading: true },
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });

    test("empty state should return loading false", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
    });
});
