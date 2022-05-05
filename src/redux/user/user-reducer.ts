/* eslint-disable no-underscore-dangle */
/* istanbul ignore file */
import { AnyAction } from '@reduxjs/toolkit';
import actionTypes from './action-types';
import { UserI } from '../../interfaces/user-i';

const initialState = {
    id: '',
    name: '',
    surName: '',
    email: '',
    password: '',
    profileImg: '',
    backImg: '',
    interFaceColor: '',
    collections: [],
    followers: [],
    following: [],
};

// eslint-disable-next-line default-param-last
function userReducer(state: UserI = initialState, action: AnyAction) {
    switch (action.type) {
        case actionTypes.loadUser:
            console.log(action.payload, ' action.payload!');
            return action.payload;
        case actionTypes.updateUser:
            return { ...state, ...action.payload };
        // case actionTypes.follow:
        //     return {
        //         ...state,
        //         followers: [...state.followers, action.payload],
        //     };
        // case actionTypes.unFollow:
        //     return {
        //         ...state,
        //         followers: state.followers.filter(
        //             (e: any) => e._id !== action.payload._id
        //         ),
        //     };
        default:
            return state;
    }
}

export default userReducer;
