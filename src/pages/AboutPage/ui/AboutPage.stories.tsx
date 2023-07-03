import type { Meta, StoryObj } from "@storybook/react";
import AboutPage from "./AboutPage";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof AboutPage> = {
    title: "pages/AboutPage",
    component: AboutPage,
    decorators: [],
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Dark: Story = {};

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
