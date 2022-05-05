import { UserLoginI, UserRegisterI } from '../../interfaces/user-i';
import { AppDispatch } from '../store';
import actionTypes from './action-types';
import * as api from '../../services/login-register-api';

export function signUp(user: UserRegisterI) {
    return (dispatch: AppDispatch) => {
        api.register(user).then((resp) => {
            dispatch({
                type: actionTypes.signUp,
                payload: resp.data,
            });
        });
    };
}

export function logIn(user: UserLoginI) {
    return (dispatch: AppDispatch) => {
        api.login(user).then((resp) => {
            dispatch({
                type: actionTypes.logIn,
                payload: resp.data,
            });
        });
    };
}

export function logOut() {
    return (dispatch: AppDispatch) => {
        dispatch({
            type: actionTypes.logOut,
        });
    };
}
