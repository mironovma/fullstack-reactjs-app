import type { Meta, StoryObj } from "@storybook/react";
import { ArticleDetails } from "./ArticleDetails";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";
import {
    ArticleBlockType,
    ArticleType,
} from "entities/Article/model/types/article";

const meta = {
    title: "entities/ArticleDetails",
    component: ArticleDetails,
    args: { id: "1" },
    decorators: [
        StoreDecorator({
            articleDetails: {
                data: {
                    id: "1",
                    title: "Test",
                    subtittle: "Subtittle",
                    createdAt: "2023.08.04",
                    views: 5447,
                    type: [ArticleType.IT],
                    img: "https://lh3.googleusercontent.com/rQiOXCi1evWhjOOOCaoM5hWmE3RUMbKqaqcV70Jf0VCAzH5pkAUsYcvRqFMzdNjg8UsJP9P0f9VYQ32eppTtTHo8YQ=w640-h400-e365-rj-sc0x00ffffff",
                    blocks: [
                        {
                            id: 1,
                            type: ArticleBlockType.TEXT,
                            paragraphs: ["Hello world"],
                            title: "title",
                        },
                    ],
                },
            },
        }),
    ],
} satisfies Meta<typeof ArticleDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {};

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Error: Story = {
    decorators: [StoreDecorator({ articleDetails: { error: "error" } })],
};

export const isLoading: Story = {
    decorators: [StoreDecorator({ articleDetails: { isLoading: true } })],
};
