import type { Meta, StoryObj } from "@storybook/react";

import { Button, ThemeButton } from "./Button";

const meta: Meta<typeof Button> = {
    title: "shared/Button",
    component: Button,
    decorators: [],
};

export default meta;
type Story = StoryObj<typeof Button>;

// Сторисы кнопки. На каждый стиль кнопки описывается свой сторис
export const Default: Story = {
    args: {
        children: "Button",
    },
};

export const Clear: Story = {
    args: {
        ...Default.args,
        theme: ThemeButton.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        ...Default.args,
        theme: ThemeButton.OUTLINE,
    },
};
