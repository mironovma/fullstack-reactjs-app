import { StateSchema } from "app/providers/StoreProvider";
import { DeepPartial } from "@reduxjs/toolkit";
import { getLoginIsLoading } from "./getLoginIsLoading";

describe("getLoginIsLoading.test", () => {
    test("should return loading boolean", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {},
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
