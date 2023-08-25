import type { Meta, StoryObj } from "@storybook/react";
import { [FTName] } from "./[FTName]";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "shared/[FTName]",
    component: [FTName],
    args: {
        
    },
} satisfies Meta<typeof [FTName]>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};