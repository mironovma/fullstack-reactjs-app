import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Navbar } from "./Navbar";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";

const meta: Meta<typeof Navbar> = {
    title: "widgets/Navbar",
    component: Navbar,
    decorators: [
        StoreDecorator({ loginForm: { username: "test", password: "test" } }),
    ],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {};

export const Authorized: Story = {
    decorators: [StoreDecorator({ user: { authData: {} } })],
};
