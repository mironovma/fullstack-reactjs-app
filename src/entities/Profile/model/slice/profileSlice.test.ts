import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ProfileSchema, ValidateProfileError } from "../types/profile";
import { profileReducer, profileActions } from "./profileSlice";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";

const data = {
    username: "admin",
    age: 25,
    firstname: "Maxim",
    lastname: "Mironov",
    city: "Tula",
    country: Country.Russia,
    currency: Currency.RUB,
};

describe("profile slice", () => {
    test("test set readonly", () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(true)
            )
        ).toStrictEqual({ readonly: true });
    });

    test("test cancel edit", () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: { username: "" },
        };
        expect(
            profileReducer(state as ProfileSchema, profileActions.cancelEdit())
        ).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    test("test update profile", () => {
        const state: DeepPartial<ProfileSchema> = {
            form: { username: "123" },
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({
                    username: "123asd",
                })
            )
        ).toStrictEqual({
            form: { username: "123asd" },
        });
    });

    test("test profile service pending", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.SERVER_ERROR],
        };
        expect(
            profileReducer(state as ProfileSchema, updateProfileData.pending)
        ).toStrictEqual({
            isLoading: true,
            validateError: undefined,
        });
    });

    test("test profile service fulfilled", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            validateError: [ValidateProfileError.SERVER_ERROR],
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, "")
            )
        ).toStrictEqual({
            isLoading: false,
            validateError: undefined,
            readonly: true,
            form: data,
            data,
        });
    });
});
