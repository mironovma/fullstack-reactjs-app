import { StateSchema } from "app/providers/StoreProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { getProfileForm } from "./getProfileForm";

describe("getProfileForm", () => {
    test("should return form", () => {
        const data = {
            username: "admin",
            age: 25,
            firstname: "Maxim",
            lastname: "Mironov",
            city: "Tula",
            country: Country.Russia,
            currency: Currency.RUB,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });

    test("empty state should return undefined", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
