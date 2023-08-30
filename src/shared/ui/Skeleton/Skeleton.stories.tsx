import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "shared/Skeleton",
    component: Skeleton,
    args: {},
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        width: "100%",
        height: 200,
    },
};

export const DefaultLight: Story = {
    args: {
        width: "100%",
        height: 200,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Circle: Story = {
    args: {
        width: 100,
        height: 100,
        border: "50%",
    },
};

export const CircleLight: Story = {
    args: {
        width: 100,
        height: 100,
        border: "50%",
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
