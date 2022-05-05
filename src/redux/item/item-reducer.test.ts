import actionTypes from './action-types';
import itemsReducer from './item-reducer';

const initialState = {
    items: [],
};
describe('Given the productsReducer', () => {
    test('userReducer create Ticket', () => {
        const newState = itemsReducer(initialState, {
            type: actionTypes.loadItems,
            payload: [
                { id: 'test', items: [] },
                { id: 'test', items: [] },
            ],
        });

        expect(newState).toEqual({
            items: [
                { id: 'test', items: [] },
                { id: 'test', items: [] },
            ],
        });
    });
});
