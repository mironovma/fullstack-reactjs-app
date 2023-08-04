import { DeepPartial } from "@reduxjs/toolkit";
import { StoryFn } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";

export const StoreDecorator =
    (state: DeepPartial<StateSchema>) => (Story: StoryFn) => {
        return (
            <StoreProvider initialState={state}>
                <Story />
            </StoreProvider>
        );
    };
