import type { Meta, StoryObj } from "@storybook/react";
import LoginForm from "./LoginForm";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";

const meta: Meta<typeof LoginForm> = {
    title: "features/LoginForm",
    component: LoginForm,
    decorators: [
        StoreDecorator({
            loginForm: {
                username: "username",
                password: "123",
                error: "",
                isLoading: false,
            },
        }),
    ],
    args: {},
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Dark: Story = {
    args: {},
};

// export const Light: Story = {
//     args: {},
//     decorators: [ThemeDecorator(Theme.LIGHT)],
// };

// export const WithError: Story = {
//     args: {},
//     decorators: [
//         StoreDecorator({
//             loginForm: {
//                 username: "username",
//                 password: "123",
//                 error: "Вы ввели неверный логин или пароль",
//             },
//         }),
//     ],
// };

// export const OnLoading: Story = {
//     args: {},
//     decorators: [
//         StoreDecorator({
//             loginForm: {
//                 username: "username",
//                 password: "123",
//                 isLoading: true,
//             },
//         }),
//     ],
// };
