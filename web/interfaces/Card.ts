import { TypedObject } from "@portabletext/types";

export interface ICard{
    categories?: string[];
    title?: string;
    img?: string;
    description?: TypedObject | TypedObject[];
    button?: string;
    hidden?: boolean;
    link?: string;
}
