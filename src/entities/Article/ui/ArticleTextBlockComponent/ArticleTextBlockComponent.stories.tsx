import type { Meta, StoryObj } from "@storybook/react";
import { ArticleTextBlockComponent } from "./ArticleTextBlockComponent";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "shared/ArticleTextBlockComponent",
    component: ArticleTextBlockComponent,
    args: {},
} satisfies Meta<typeof ArticleTextBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
