import type { Preview } from "@storybook/react";
/**
 * СНАЧАЛА СДЕЛАЛ ПО-СВОЕМУ, НО ВСЕ ЖЕ РЕШИЛ СДЕЛАТЬ ПО КУРСУ С ОПОРОЙ НА ГИТ: (ссылка в main.ts)
 *
 * Можно глобальные стили протащить здесь,
 * а можно создать декоратор и завернуть сразу все сторисы с
 * импортом глобальных стилей.
 * Подробно про декораторы:
 * https://www.youtube.com/watch?v=4yi_yCTkgng
 * https://storybook.js.org/docs/react/writing-stories/decorators
 *
 * Глобальные стили можно прямо так импортировать в preview
 * Можно создать декоратор и протащить его в свойство decorators
 * Можно создавать декораторы на каждый отдельный сторис (соответственно в каждом отдельном сторис)
 * Можно писать глобальные декораторы прямо в свойстве decorators, как в закомеентированном примере ниже
 */
// import "../../src/app/styles/index.scss";

/**
 * Я, как в курсе, протащил отдельные декоратор в свойства decorators.
 * Хотя лучше было бы глобальные стили просто заимпортить сюда
 */
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator";
import { Theme } from "../../src/app/providers/ThemeProvider";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        /**
         * В курсе темы сделаны с помощью декораторов, но
         *
         * А темы решил добавить с помощью аддона
         * storybook-addon-themes
         * Свойство color можно не добавлять, просто в интерфейсе сторибука
         * становится приятнее по навигации. Сразу понимаешь какого цвета будет тема.
         *
         * Подробнее о темах:
         * https://storybook.js.org/addons/@dhruvkb/storybook-addon-themes
         *
         * Можно добавлять темы отдельно для каждого сторис.
         */
        // themes: {
        //     default: Theme.DARK,
        //     list: [
        //         { name: "Light", class: Theme.LIGHT, color: "#d9d9d9" },
        //         { name: "Dark", class: Theme.DARK, color: "#1c1c1c" },
        //     ],
        // },
    },
    /**
     * Глобальные декораторы для всех сторис.
     * Для каждого отдельного сторис можно тоже делать декораторы.
     */
    decorators: [
        StyleDecorator,
        ThemeDecorator(Theme.DARK),
        RouterDecorator,
        // (Story) => (
        //     <div style={{ background: "green" }}>
        //         <Story />
        //     </div>
        // ),
        // withThemeDecorator,
    ],
};

export default preview;
