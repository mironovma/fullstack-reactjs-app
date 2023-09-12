import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Text } from "../Text/Text";

const meta = {
    title: "shared/Card",
    component: Card,
    args: {
        children: (
            <Text
                title="Hello world"
                text="Lorem hello world Lorem hello world"
            />
        ),
    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
