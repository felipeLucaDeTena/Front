/* eslint-disable default-param-last */
/* eslint-disable no-param-reassign */
import { AnyAction } from '@reduxjs/toolkit';
import actionTypes from './action-types';
import { ItemI } from '../../interfaces/item-i';

interface ItemsI {
    items: ItemI[];
}
const initialState = {
    items: [],
};

function itemsReducer(state: ItemsI = initialState, action: AnyAction) {
    switch (action.type) {
        case actionTypes.loadItems:
            return { ...state, items: [...action.payload] };
        default:
            return state;
    }
}

export default itemsReducer;
