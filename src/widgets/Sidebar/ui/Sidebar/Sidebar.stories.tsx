import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";

const meta: Meta<typeof Sidebar> = {
    title: "widgets/Sidebar",
    component: Sidebar,
    decorators: [],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {};

export const NoAtuh: Story = {
    decorators: [
        StoreDecorator({
            user: { authData: {} },
        }),
    ],
};
