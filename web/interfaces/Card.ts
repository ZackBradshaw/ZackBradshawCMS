import { TypedObject } from "@portabletext/types";
import { ICategory } from "./IPost";
export interface ICard{
    categories: string[]
    title?: string;
    img?: string;
    description?: TypedObject | TypedObject[];
    button?: string;
    hidden?: boolean;
    link?: string;
}

