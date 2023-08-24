import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { validateProfileData } from "./validateProfileData";
import { ValidateProfileError } from "../../types/profile";

const data = {
    username: "admin",
    age: 25,
    firstname: "Maxim",
    lastname: "Mironov",
    city: "Tula",
    country: Country.Russia,
    currency: Currency.RUB,
};

describe("fetchProfileData", () => {
    test("succes", async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test("without first and last name", async () => {
        const result = validateProfileData({
            ...data,
            firstname: "",
            lastname: "",
        });

        expect(result).toEqual([ValidateProfileError.INCORECT_USER_DATA]);
    });

    test("incorrect age", async () => {
        const result = validateProfileData({
            ...data,
            age: undefined,
        });

        expect(result).toEqual([ValidateProfileError.INCORECT_AGE]);
    });

    test("incorrect country", async () => {
        const result = validateProfileData({
            ...data,
            country: undefined,
        });

        expect(result).toEqual([ValidateProfileError.INCORECT_COUNTRY]);
    });

    test("incorrect all", async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORECT_USER_DATA,
            ValidateProfileError.INCORECT_AGE,
            ValidateProfileError.INCORECT_COUNTRY,
        ]);
    });
});
