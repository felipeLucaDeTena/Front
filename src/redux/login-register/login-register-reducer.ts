/* eslint-disable no-underscore-dangle */
/* eslint-disable default-param-last */
/* eslint-disable no-param-reassign */
import { AnyAction } from '@reduxjs/toolkit';
import actionTypes from './action-types';
import actionTypesCollections from '../collection/action-types';
import actionTypesUser from '../user/action-types';

interface UserRegisterI {
    id: String;
    name: String;
    surName: String;
    email: String;
    password: String;
    profileImg: any;
    backImg: any;
    interFaceColor: String;
    collections: any;
    followers: UserRegisterI[];
    following: UserRegisterI[];
    isLogged: boolean;
}
const initialState: UserRegisterI = {
    id: '',
    name: '',
    surName: '',
    email: '',
    password: '',
    profileImg: '',
    backImg: '',
    interFaceColor: 'grey',
    collections: [],
    followers: [],
    following: [],
    isLogged: false,
};

function loginReducer(state: UserRegisterI = initialState, action: AnyAction) {
    switch (action.type) {
        case actionTypes.logIn:
            state = { ...action.payload, isLogged: true };
            return state;
        case actionTypes.logOut:
            state = initialState;
            return state;
        case actionTypes.signUp:
            state = action.payload;
            return state;
        case actionTypesCollections.deleteCollections:
            return {
                ...state,
                collections: state.collections.filter(
                    (e: any) => e._id !== action.payload._id
                ),
            };
        case actionTypesUser.unFollow:
            return {
                ...state,
                ...action.payload,
            };
        case actionTypesUser.follow:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
}

export default loginReducer;
