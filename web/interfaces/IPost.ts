import { TypedObject } from "@portabletext/types";

export interface IPost {
    _createdAt?: Date;
    _id?: string;
    _rev?: string;
    _type?: string;
    _updatedAt?: Date;
    body?: TypedObject | TypedObject[];
    author?: IAuthor;
    categories?: string[];
    mainImage?: IMainImage;
    slug?: ISlug;
    title?: string;
    projectLink?: string;
  }
  export interface IAuthor {
    _ref: string;
    _type: string;
  }
  export interface ICategory {
    _key: string;
    _ref: string;
    _type: string;
  }
  
 export interface IMainImage {
    _type: string;
    asset: IAsset;
  }
  export interface IAsset {
    _ref: string;
    _type: string;
  }
  export interface ISlug {
    _type: string;
    current: string;
  }
  