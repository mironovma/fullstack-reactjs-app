import type { Meta, StoryObj } from "@storybook/react";
import { AppLink, AppLinkTheme } from "./AppLink";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof AppLink> = {
    title: "widgets/AppLink",
    component: AppLink,
    decorators: [],
    args: {
        children: "Text",
        to: "/",
    },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Secondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
