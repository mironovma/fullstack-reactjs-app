import type { Meta, StoryObj } from "@storybook/react";
import ProfilePage from "./ProfilePage";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import avatar from "shared/assets/tests/profile-img.png";

const meta: Meta<typeof ProfilePage> = {
    title: "pages/ProfilePage",
    component: ProfilePage,
    decorators: [
        StoreDecorator({
            profile: {
                form: {
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
        }),
    ],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Dark: Story = {
    decorators: [StoreDecorator({})],
};

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
};
