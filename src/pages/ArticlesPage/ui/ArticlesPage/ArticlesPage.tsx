import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./ArticlesPage.module.scss";
import { Article, ArticleList, ArticleView } from "entities/Article";

interface ArticlesPageProps {
    className?: string;
}
// @ts-ignore
const article = {
    id: "1",
    title: "JavaScript News – New innovation in programming languages",
    subtittle: "Что нового в JS за 2023 год?",
    img: "https://lh3.googleusercontent.com/rQiOXCi1evWhjOOOCaoM5hWmE3RUMbKqaqcV70Jf0VCAzH5pkAUsYcvRqFMzdNjg8UsJP9P0f9VYQ32eppTtTHo8YQ=w640-h400-e365-rj-sc0x00ffffff",
    views: 2566,
    createdAt: "30.08.2023",
    user: {
        id: "1",
        username: "admin",
        avatar: "https://media.wired.com/photos/644318b17b25a434b1f3bbd7/master/w_2560%2Cc_limit/security_hacker_names.jpg",
    },
    type: ["IT", "SPORT", "ECONOMICS", "POLITICS"],
    blocks: [
        {
            id: "1",
            type: "TEXT",
            title: "Заголовок этого блока",
            paragraphs: [
                "Реактивность — это то, как системы реагируют на обновление данных. Существуют разные типы реактивности, но в рамках этой статьи, реактивность — это когда мы что-то делаем в ответ на изменение данных.",
                "Мы работаем с большим количеством JS на сайтах и в веб-приложениях, поскольку браузер — это полностью асинхронная среда. Мы должны реагировать на действия пользователя, взаимодействовать с сервером, отправлять отчеты, мониторить производительность и т.д. Это включает в себя обновление UI, сетевые запросы, изменения навигации и URL в браузере, что делает каскадное обновление данных ключевым аспектом веб-разработки.",
                "Реактивность, обычно, ассоциируется с фреймворками, но можно многому научиться, реализуя реактивность на чистом JS. Мы можем смешивать и играть с этими паттернами для лучшей обработки обновления данных.",
            ],
        },
        {
            id: "2",
            type: "CODE",
            code: 'import { memo } from "react";\nimport { useTranslation } from "react-i18next";\nimport { classNames } from "shared/lib/classNames/classNames";\nimport { Button } from "../Button/Button";\nimport styles from "./Code.module.scss";\n\ninterface CodeProps {\n    className?: string;\n    text: string;\n}\n\nexport const Code = memo(({ className, text }: CodeProps) => {\n    const { t } = useTranslation();\n\n    return (\n        <pre className={classNames(styles.Code, {}, [className])}>\n            <Button className={styles.copyBtn}>{t("Копировать")}</Button>\n            <code>{text}</code>\n        </pre>\n    );\n});\n',
        },
        {
            id: "3",
            type: "TEXT",
            title: "Заголовок блока",
            paragraphs: [
                "Реактивность, обычно, ассоциируется с фреймворками, но можно многому научиться, реализуя реактивность на чистом JS. Мы можем смешивать и играть с этими паттернами для лучшей обработки обновления данных.",
            ],
        },
        {
            id: "4",
            type: "IMAGE",
            src: "https://lh3.googleusercontent.com/rQiOXCi1evWhjOOOCaoM5hWmE3RUMbKqaqcV70Jf0VCAzH5pkAUsYcvRqFMzdNjg8UsJP9P0f9VYQ32eppTtTHo8YQ=w640-h400-e365-rj-sc0x00ffffff",
            title: "Изображение - скриншот сайта",
        },
        {
            id: "5",
            type: "TEXT",
            paragraphs: [
                "Реактивность, обычно, ассоциируется с фреймворками, но можно многому научиться, реализуя реактивность на чистом JS. Мы можем смешивать и играть с этими паттернами для лучшей обработки обновления данных.",
                "Мы работаем с большим количеством JS на сайтах и в веб-приложениях, поскольку браузер — это полностью асинхронная среда. Мы должны реагировать на действия пользователя, взаимодействовать с сервером, отправлять отчеты, мониторить производительность и т.д. Это включает в себя обновление UI, сетевые запросы, изменения навигации и URL в браузере, что делает каскадное обновление данных ключевым аспектом веб-разработки.",
            ],
        },
    ],
} as Article;

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    return (
        <div className={classNames(styles.ArticlesPage, {}, [className])}>
            <ArticleList
                isLoading
                view={ArticleView.BIG}
                articles={new Array(16).fill(0).map((item, index) => ({
                    ...article,
                    id: String(index),
                }))}
            />
        </div>
    );
};

export default memo(ArticlesPage);
