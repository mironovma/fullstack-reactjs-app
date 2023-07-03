import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "./Loader";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Loader> = {
    title: "widgets/Loader",
    component: Loader,
    decorators: [],
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Dark: Story = {};

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
