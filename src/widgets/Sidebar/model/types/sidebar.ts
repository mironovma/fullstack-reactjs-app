export interface SidebarItemType {
    path: string;
    text: string;
    // Название Icon с большой, т.к. это компонент. По-хорошему, компоненты называть с большой
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    authOnly?: boolean;
}
