import { StateSchema } from "app/providers/StoreProvider";

export const getProfileErorr = (state: StateSchema) => state?.profile?.error;
