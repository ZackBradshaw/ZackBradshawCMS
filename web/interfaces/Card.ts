import { TypedObject } from "@portabletext/types";

export interface ICard{
    tech?: TypedObject | TypedObject[];
    title?: string;
    img?: string;
    description?: TypedObject | TypedObject[];
    button?: string;
    hidden?: boolean;
}
