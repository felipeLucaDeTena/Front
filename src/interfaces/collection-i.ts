import { ItemI } from './item-i';

export interface CollectionI {
    _id?: string;
    img: string;
    name: String;
    createdBy: Object;
    totalPrice: Number;
    items: ItemI[];
    favourite: Boolean;
    likes: Number;
}
