import axios from "axios";
import { loginByUsername } from "./loginByUsername";
import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

jest.mock("axios");

const mockedAxios = jest.mocked(axios, true);

describe("loginByUsername.test", () => {
    // Было:

    // let dispatch: Dispatch;
    // let getState: () => StateSchema;

    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // });

    // test("succes auth", async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
    //     const action = loginByUsername({ username: "user", password: "123" });
    //     const result = await action(dispatch, getState, undefined);
    //     console.log(result);

    //     expect(dispatch).toHaveBeenCalledWith(
    //         userActions.setAuthData(userValue)
    //     );
    //     expect(dispatch).toHaveBeenCalledTimes(3);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe("fulfilled");
    //     expect(result.payload).toEqual(userValue);
    // });

    // test("rejected auth", async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    //     const action = loginByUsername({ username: "user", password: "123" });
    //     const result = await action(dispatch, getState, undefined);
    //     console.log(result);

    //     expect(dispatch).toHaveBeenCalledTimes(2);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe("rejected");
    //     expect(result.payload).toEqual("Something went wrong");
    // });

    // Стало:
    test("succes auth", async () => {
        const userValue = { username: "user", id: "1" };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({
            username: "user",
            password: "123",
        });

        expect(thunk.dispatch).toHaveBeenCalledWith(
            userActions.setAuthData(userValue)
        );
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(userValue);
    });

    test("rejected auth", async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({
            username: "user",
            password: "123",
        });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual("Something went wrong");
    });
});
