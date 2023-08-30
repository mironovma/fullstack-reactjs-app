import type { Meta, StoryObj } from "@storybook/react";
import { ArticleImageBlockComponent } from "./ArticleImageBlockComponent";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "shared/ArticleImageBlockComponent",
    component: ArticleImageBlockComponent,
    args: {},
} satisfies Meta<typeof ArticleImageBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
