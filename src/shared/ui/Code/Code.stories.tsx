import type { Meta, StoryObj } from "@storybook/react";
import { Code } from "./Code";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "shared/Code",
    component: Code,
    args: {
        text: `
        export const Code = memo(({ className, text }: CodeProps) => {
            const { t } = useTranslation();
        
            return (
                <pre className={classNames(styles.Code, {}, [className])}>
                    <code>{text}</code>
                </pre>
            );
        });
        `,
    },
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {};

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Blue: Story = {
    decorators: [ThemeDecorator(Theme.BLUE)],
};
