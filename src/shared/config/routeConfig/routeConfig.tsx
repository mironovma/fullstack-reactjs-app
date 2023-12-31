import { RouteProps } from "react-router-dom";

import { AboutPage } from "pages/AboutPage";
import { ArticleDetailsPage } from "pages/ArticleDetailPage";
import { ArticlesPage } from "pages/ArticlesPage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { ProfilePage } from "pages/ProfilePage";

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
};

export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
    PROFILE = "profile",
    ARTICLES = "articles",
    ARTICLE_DETAILS = "articles_detail", // + id

    // last
    NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.PROFILE]: "/profile/", // + id. Не забываем поставить / в конце
    [AppRoutes.ARTICLES]: "/articles",
    [AppRoutes.ARTICLE_DETAILS]: "/articles/", // + id

    // last
    [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath.profile}:id`, // чтобы динамически получали id профиля и переходили на него
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        // path: RoutePath.articles_detail + ":id",
        path: `${RoutePath.articles_detail}:id`, // чтобы динамически получали id статьи и переходили на нее
        element: <ArticleDetailsPage />,
        authOnly: true,
    },

    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
