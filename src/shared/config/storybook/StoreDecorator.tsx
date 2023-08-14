import { StoryFn } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { profileReducer } from "entities/Profile";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { ReducerList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
};

export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: ReducerList) =>
    (Story: StoryFn) => {
        return (
            <StoreProvider
                initialState={state}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <Story />
            </StoreProvider>
        );
    };
