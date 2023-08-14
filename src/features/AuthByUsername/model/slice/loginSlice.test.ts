import { LoginSchema } from "../types/loginSchema";
import { loginActions, loginReducer } from "./loginSlice";

describe("loginSlice.test", () => {
    test("test set username", () => {
        const state: DeepPartial<LoginSchema> = { username: "user" };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUsername("user12345")
            )
        ).toStrictEqual({ username: "user12345" });
    });

    test("test set password", () => {
        const state: DeepPartial<LoginSchema> = { password: "123" };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setPassword("1234567890")
            )
        ).toStrictEqual({ password: "1234567890" });
    });
});
