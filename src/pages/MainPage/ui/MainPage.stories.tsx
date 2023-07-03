import type { Meta, StoryObj } from "@storybook/react";
import MainPage from "./MainPage";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof MainPage> = {
    title: "pages/MainPage",
    component: MainPage,
    decorators: [],
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Dark: Story = {};

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
