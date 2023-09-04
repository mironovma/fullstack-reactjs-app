import { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import {
    ArticleBlockType,
    ArticleType,
} from "entities/Article/model/types/article";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import ArticleDetailsPage from "./ArticleDetailsPage";

const article = {
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
};

const meta = {
    title: "pages/ArticleDetailsPage",
    component: ArticleDetailsPage,
    args: {},
    decorators: [StoreDecorator(article)],
} satisfies Meta<typeof ArticleDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
