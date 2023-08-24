import type { Meta, StoryObj } from "@storybook/react";
import { ProfileCard } from "./ProfileCard";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import avatar from "shared/assets/tests/profile-img.png";

const meta = {
    title: "entities/ProfileCard",
    component: ProfileCard,
    args: {
        data: {
            username: "admin",
            age: 25,
            firstname: "Maxim",
            lastname: "Mironov",
            city: "Tula",
            country: Country.Russia,
            currency: Currency.RUB,
            avatar,
        },
    },
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const isLoading: Story = {
    args: { isLoading: true },
};

export const Error: Story = {
    args: { error: "true" },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
