import * as api from '../../services/api/item-api';
import actionTypes from './action-types';
import { AppDispatch } from '../store';

function loadItems() {
    return (dispatch: AppDispatch) => {
        api.getItems().then((resp: any) => {
            dispatch({
                type: actionTypes.loadItems,
                payload: resp.data,
            });
        });
    };
}
export default loadItems;
