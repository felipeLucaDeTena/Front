import axios from 'axios';
import { CollectionI } from '../../interfaces/collection-i';

const COLLECTIONURL = 'http://localhost:3600/collections/';

export const getCollection = (id: any): Promise<Response> =>
    axios.get(COLLECTIONURL + id);

export const getCollections = (): Promise<Response> => axios.get(COLLECTIONURL);

export const addCollection = (
    collection: CollectionI,
    token: string
): Promise<Response> =>
    axios.post(COLLECTIONURL, collection, {
        headers: { authorization: `Bearer ${token}` },
    });
export const updateCollection = (
    collection: CollectionI,
    token: any
): Promise<Response> =>
    // eslint-disable-next-line no-underscore-dangle
    axios.patch(COLLECTIONURL + collection._id, collection, {
        headers: { authorization: `Bearer ${token}` },
    });
export const deleteCollection = (
    collection: CollectionI,
    token: string
): Promise<Response> =>
    // eslint-disable-next-line no-underscore-dangle
    axios.delete(COLLECTIONURL + collection, {
        headers: { authorization: `Bearer ${token}` },
    });
