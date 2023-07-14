import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Modal> = {
    title: "widgets/Modal",
    component: Modal,
    decorators: [],
    args: {
        children:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam corporis tempore accusantium quis ex architecto deleniti totam. Expedita earum perferendis sed aspernatur quidem officia?",
        isOpen: true,
    },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Light: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
