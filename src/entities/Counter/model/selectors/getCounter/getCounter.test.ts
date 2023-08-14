import { getCounter } from "./getCounter";
import { StateSchema } from "app/providers/StoreProvider";

describe("getCounter", () => {
    test("should return counter state", () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        /**
         * Второй вариант тоже работает, НО!!!
         * Мы уже сейчас используем DeepPartial (делает аргументы
         * необязательными), т.к. далее стейт будет разрастаться и нам
         * не нужно в тесты таскать все стейты.
         */
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
