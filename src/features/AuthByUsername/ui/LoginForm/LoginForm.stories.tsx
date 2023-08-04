import type { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "./LoginForm";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof LoginForm> = {
    title: "features/LoginForm",
    component: LoginForm,
    decorators: [StoreDecorator({ loginForm: { username: "", password: "" } })],
    args: {},
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Dark: Story = {
    args: {},
};

export const Light: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const WithError: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: {
                error: "Something went wrong",
            },
        }),
    ],
};

export const OnLoading: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: {
                isLoading: true,
            },
        }),
    ],
};
