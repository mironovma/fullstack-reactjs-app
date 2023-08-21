import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "shared/Select",
    component: Select,
    args: {
        label: "Укажите значение",
        options: [
            { value: "123", content: "Первый пункт" },
            { value: "456", content: "Второй пункт" },
        ],
    },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
