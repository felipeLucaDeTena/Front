import actionTypes from './action-types';
import loadItems from './action-creators';

jest.mock('../../services/api/item-api.ts', () => ({
    getItems: () =>
        Promise.resolve({
            data: {
                test: 'test',
            },
        }),
}));

describe('Given actions creators ', () => {
    describe('When loadProducts is called', () => {
        test('Dispatch is called with successful action', async () => {
            const dispatchMock = jest.fn();

            await loadItems()(dispatchMock);

            expect(dispatchMock).toHaveBeenCalledWith({
                type: actionTypes.loadItems,
                payload: {
                    test: 'test',
                },
            });
        });
    });
});
