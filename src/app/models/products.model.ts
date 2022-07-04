import { Image } from "./image.models";

export interface Product {
    image: Image;
    _id: string;
    name: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}



