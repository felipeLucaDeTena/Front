import { loadCollections, toggleCollection } from './action-creators';
import actionTypes from './action-types';

jest.mock('../../services/api/collection-api.ts', () => ({
    getCollections: () =>
        Promise.resolve({
            data: {
                test: 'test',
            },
        }),
    updateCollection: () =>
        Promise.resolve({
            data: {
                test: 'test',
            },
        }),
}));

const token: string = '3782983271fff';

describe('Given actions creators ', () => {
    describe('When loadCollections is called', () => {
        test('Dispatch is called with successful action', async () => {
            const dispatchMock = jest.fn();

            await loadCollections()(dispatchMock);

            expect(dispatchMock).toHaveBeenCalledWith({
                type: actionTypes.loadCollections,
                payload: {
                    test: 'test',
                },
            });
        });
    });
    describe('When update is called', () => {
        test('Dispatch is called with successful action', async () => {
            const dispatchMock = jest.fn();

            await toggleCollection(
                { test: 'test', id: 'test' },
                token
            )(dispatchMock);

            expect(dispatchMock).toHaveBeenCalledWith({
                type: actionTypes.updateCollections,
                payload: {
                    test: 'test',
                },
            });
        });
    });
});
