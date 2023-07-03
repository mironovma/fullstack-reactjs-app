import type { Meta, StoryObj } from "@storybook/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof ThemeSwitcher> = {
    title: "widgets/ThemeSwitcher",
    component: ThemeSwitcher,
    decorators: [],
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Dark: Story = {};

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
