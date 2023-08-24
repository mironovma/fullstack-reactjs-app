import { StateSchema } from "app/providers/StoreProvider";
import { getProfileReadonly } from "./getProfileReadonly";

describe("getProfileReadonly", () => {
    test("should return isLoading", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        };
        expect(getProfileReadonly(state as StateSchema)).toEqual(true);
    });

    test("empty state should return undefined", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
    });
});
