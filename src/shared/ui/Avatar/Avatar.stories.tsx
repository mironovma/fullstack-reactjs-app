import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import AvatarImg from "./profile-img.png";

const meta = {
    title: "shared/Avatar",
    component: Avatar,
    args: {
        size: 150,
        src: AvatarImg,
    },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Small: Story = {
    args: {
        size: 50,
    },
};
