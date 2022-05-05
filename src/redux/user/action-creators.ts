import * as api from '../../services/api/user-api';
import actionTypes from './action-types';
import { AppDispatch } from '../store';

export function loadUser(userState: any) {
    return (dispatch: AppDispatch) => {
        api.getUser(userState).then((resp: any) => {
            console.log(resp, ' resp en front');
            dispatch({
                type: actionTypes.loadUser,
                payload: resp.data,
            });
        });
    };
}
export function updateUser(parcialUser: any, userState: any) {
    return (dispatch: AppDispatch) => {
        api.updateUser(parcialUser, userState).then((resp: any) => {
            dispatch({
                type: actionTypes.updateUser,
                payload: resp.data,
            });
        });
    };
}
export function followUser(user: any, id: string) {
    return (dispatch: AppDispatch) => {
        api.follow(user, id).then((resp: any) => {
            console.log(resp.data);
            dispatch({
                type: actionTypes.follow,
                payload: resp.data,
            });
        });
    };
}
export function unFollowUser(user: any, id: string) {
    return (dispatch: AppDispatch) => {
        api.unFollow(user, id).then((resp: any) => {
            dispatch({
                type: actionTypes.unFollow,
                payload: resp.data,
            });
        });
    };
}
