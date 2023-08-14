import { StateSchema } from "app/providers/StoreProvider";
import { getLoginPassword } from "./getLoginPassword";

describe("getLoginPassword.test", () => {
    test("should return password", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: "123",
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual("123");
    });

    test("empty state should return empty sting", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual("");
    });
});
