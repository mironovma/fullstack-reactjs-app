import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonSize, ButtonTheme } from "./Button";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

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
        theme: ButtonTheme.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        ...Default.args,
        theme: ButtonTheme.OUTLINE,
    },
};

export const OutlineDark: Story = {
    args: {
        ...Default.args,
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const BackgroundTheme: Story = {
    args: {
        ...Default.args,
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BackgroundInvertedTheme: Story = {
    args: {
        ...Default.args,
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const Square: Story = {
    args: {
        ...Default.args,
        children: "<",
        theme: ButtonTheme.BACKGROUND,
        square: true,
    },
};

export const SquareInverted: Story = {
    args: {
        ...Default.args,
        children: "<",
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
    },
};

export const SquareSizeL: Story = {
    args: {
        ...Default.args,
        children: "<",
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
};

export const SquareSizeXl: Story = {
    args: {
        ...Default.args,
        children: "<",
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};

export const Disabled: Story = {
    args: {
        ...Default.args,
        theme: ButtonTheme.BACKGROUND_INVERTED,
        disabled: true,
    },
};

/**
 * На самом деле под каждое состояние нет необходимости писать
 * сторис, т.к. все пропсы у нас передаются в интерфейс сторибука.
 * Внутри сторибука в интерфейсе мы можем кликать и видеть все состояния кнопки.
 *
 * Хотя какие-то определенные состояния по типу кнопки свертывания "<" я бы написал.
 */
