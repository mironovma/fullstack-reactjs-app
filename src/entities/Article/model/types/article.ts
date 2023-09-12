import { User } from "entities/User";

export enum ArticleBlockType {
    CODE = "CODE",
    IMAGE = "IMAGE",
    TEXT = "TEXT",
}

export interface ArticleBaseBlock {
    id: number;
    type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBaseBlock {
    type: ArticleBlockType.CODE;
    code: string;
}

export interface ArticleImageBlock extends ArticleBaseBlock {
    type: ArticleBlockType.IMAGE;
    src: string;
    title?: string;
}

export interface ArticleTextBlock extends ArticleBaseBlock {
    type: ArticleBlockType.TEXT;
    title?: string;
    paragraphs: string[];
}

export type ArticleBlock =
    | ArticleCodeBlock
    | ArticleImageBlock
    | ArticleTextBlock;

export enum ArticleType {
    IT = "IT",
    SCIENCE = "SCIENCE",
    ECONOMICS = "ECONOMICS",
}

export enum ArticleView {
    BIG = "BIG",
    SMALL = "SMALL",
}

export interface Article {
    id: string;
    title: string;
    user: User;
    subtittle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
}
