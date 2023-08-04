import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Text, TextSize, TextTheme } from "./Text";

const meta: Meta<typeof Text> = {
    title: "shared/Text",
    component: Text,
    decorators: [],
    args: {
        size: TextSize.M,
    },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: "This is header",
        text: "This is paragraph. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime reiciendis explicabo aut minus consequuntur voluptatibus sed commodi cumque consequatur dignissimos doloremque nostrum excepturi ipsum et ullam quo, quam nulla facere?",
    },
};

export const PrimaryLight: Story = {
    args: {
        title: "This is header",
        text: "This is paragraph. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime reiciendis explicabo aut minus consequuntur voluptatibus sed commodi cumque consequatur dignissimos doloremque nostrum excepturi ipsum et ullam quo, quam nulla facere?",
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const OnlyTitle: Story = {
    args: {
        title: "This is header",
    },
};

export const OnlyText: Story = {
    args: {
        text: "This is paragraph. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime reiciendis explicabo aut minus consequuntur voluptatibus sed commodi cumque consequatur dignissimos doloremque nostrum excepturi ipsum et ullam quo, quam nulla facere?",
    },
};

export const Error: Story = {
    args: {
        text: "Error",
        theme: TextTheme.ERROR,
    },
};
