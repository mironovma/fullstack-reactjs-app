import { RoutePath } from "shared/config/routeConfig/routeConfig";

import HomeIcon from "shared/assets/icons/home.svg";
import AboutIcon from "shared/assets/icons/about-us.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";

export interface SidebarItemType {
    path: string;
    text: string;
    // С большой, т.к. это компонент. По-хорошему, компоненты называть с большой
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: HomeIcon,
        text: "Главная",
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: "О нас",
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: "Профиль",
    },
];
