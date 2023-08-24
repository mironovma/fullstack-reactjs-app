import { StateSchema } from "app/providers/StoreProvider";
import { getProfileErorr } from "./getProfileError";

describe("getProfileErorr", () => {
    test("should return error", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: "123",
            },
        };
        expect(getProfileErorr(state as StateSchema)).toEqual("123");
    });

    test("empty state should return undefined", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileErorr(state as StateSchema)).toEqual(undefined);
    });
});
