import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
    title: "shared/Input",
    component: Input,
    decorators: [],
    args: {
        placeholder: "Placeholder",
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    args: {},
};
