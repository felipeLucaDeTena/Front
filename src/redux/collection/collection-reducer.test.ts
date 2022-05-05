import actionTypes from './action-types';
import collectionsReducer from './collection-reducer';

const initialState = {
    collections: [],
};
describe('', () => {
    test('', () => {
        const newState = collectionsReducer(initialState, {
            type: actionTypes.loadCollections,
            payload: [
                { id: 'test', collections: [] },
                { id: 'test', collections: [] },
            ],
        });

        expect(newState).toEqual({
            collections: [
                { id: 'test', collections: [] },
                { id: 'test', collections: [] },
            ],
        });
    });
    test('loginReducer', () => {
        const newState = collectionsReducer(initialState, {
            type: actionTypes.deleteCollections,
            payload: {
                collections: [{ test: 'test' }],
            },
        });

        expect(newState).toEqual({
            collections: [],
        });
    });
    test('loginReducer', () => {
        const newState = collectionsReducer(initialState, {
            type: actionTypes.addCollections,
            payload: {
                collections: [],
                followers: [
                    {
                        collections: [],
                    },
                ],
            },
        });

        expect(newState).toEqual({
            collections: [],
            followers: [
                {
                    collections: [],
                    followers: [
                        {
                            collections: [],
                        },
                    ],
                },
            ],
        });
    });
    test('loginReducer', () => {
        const newState = collectionsReducer(initialState, {
            type: actionTypes.updateCollections,
            payload: {
                collections: [],
            },
        });

        expect(newState).toEqual({
            collections: [],
        });
    });
    test('loginReducer', () => {
        const newState = collectionsReducer(initialState, {
            type: actionTypes.loadCollection,
            payload: {
                collections: [],
            },
        });

        expect(newState).toEqual({
            collections: [],
        });
    });
});
