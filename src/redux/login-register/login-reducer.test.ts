import actionTypes from './action-types';
import loginReducer from './login-register-reducer';
import actiontypesCollection from '../collection/action-types';

const initialState = {
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

describe('Given the loginReducer', () => {
    test('loginReducer', () => {
        const newState = loginReducer(initialState, {
            type: actionTypes.signUp,
            payload: {
                id: 'test',
                name: 'test',
                surName: 'test',
                email: 'test',
                password: 'test',
                profileImg: 'test',
                backImg: 'test',
                interFaceColor: 'grey',
                collections: [],
                followers: [],
                following: [],
                isLogged: false,
            },
        });

        expect(newState).toEqual({
            id: 'test',
            name: 'test',
            surName: 'test',
            email: 'test',
            password: 'test',
            profileImg: 'test',
            backImg: 'test',
            interFaceColor: 'grey',
            collections: [],
            followers: [],
            following: [],
            isLogged: false,
        });
    });

    test('loginReducer', () => {
        const newState = loginReducer(initialState, {
            type: actionTypes.logIn,
            payload: {
                email: 'test',
                password: 'test',
                id: '123',
                isLogged: false,
            },
        });

        expect(newState).toEqual({
            email: 'test',
            password: 'test',
            id: '123',
            isLogged: true,
        });
    });

    test('loginReducer', () => {
        const newState = loginReducer(initialState, {
            type: actionTypes.logOut,
        });

        expect(newState).toEqual(initialState);
    });
    test('loginReducer', () => {
        const newState = loginReducer(initialState, {
            type: actiontypesCollection.deleteCollections,
            payload: {
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
            },
        });

        expect(newState).toEqual({
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
        });
    });
});
