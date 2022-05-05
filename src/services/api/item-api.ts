import axios from 'axios';
import { ItemI } from '../../interfaces/item-i';

const ITEMURL = 'http://localhost:3600/items';

export const getItem = (id: string): Promise<Response> =>
    axios.get(ITEMURL + id);
export const getItems = (): Promise<Response> => axios.get(ITEMURL);
export const addItem = (item: ItemI): Promise<Response> =>
    axios.post(ITEMURL, item);
export const updateItem = (item: ItemI): Promise<Response> =>
    axios.patch(ITEMURL + item.id, item);
export const deleteItem = (item: ItemI): Promise<Response> =>
    axios.delete(ITEMURL + item.id);
