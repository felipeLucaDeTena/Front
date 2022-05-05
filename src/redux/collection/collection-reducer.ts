/* eslint-disable no-underscore-dangle */
/* eslint-disable default-param-last */
/* eslint-disable no-param-reassign */
import { AnyAction } from '@reduxjs/toolkit';
import actionTypes from './action-types';
import { CollectionI } from '../../interfaces/collection-i';

interface CollectionsI {
    collections: Partial<CollectionI>[];
}
const initialState = {
    collections: [],
};

function collectionsReducer(
    state: CollectionsI = initialState,
    action: AnyAction
) {
    switch (action.type) {
        case actionTypes.loadCollections:
            return { ...state, collections: [...action.payload] };
        case actionTypes.addCollections:
            return {
                ...state,
                followers: [...state.collections, action.payload],
            };
        case actionTypes.deleteCollections:
            return {
                ...state,
                collections: state.collections.filter(
                    (e: any) => e._id !== action.payload._id
                ),
            };
        case actionTypes.updateCollections:
            return { ...state, ...action.payload };
        case actionTypes.loadCollection:
            return action.payload;

        default:
            return state;
    }
}

export default collectionsReducer;
