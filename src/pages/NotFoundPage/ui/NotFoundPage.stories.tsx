import type { Meta, StoryObj } from "@storybook/react";
import { NotFoundPage } from "./NotFoundPage";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof NotFoundPage> = {
    title: "pages/NotFoundPage",
    component: NotFoundPage,
    decorators: [],
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Dark: Story = {};

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
