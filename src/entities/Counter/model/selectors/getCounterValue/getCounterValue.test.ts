import { StateSchema } from "app/providers/StoreProvider";
import { getCounterValue } from "./getCounterValue";
import { DeepPartial } from "@reduxjs/toolkit";

describe("getCounterValue.test", () => {
    test("should return counter state value", () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
