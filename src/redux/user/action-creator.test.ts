import {
    loadUser,
    updateUser,
    unFollowUser,
    followUser,
} from './action-creators';
import actionTypes from './action-types';

jest.mock('../../services/api/user-api', () => ({
    getUser: () =>
        Promise.resolve({
            data: {
                _id: '17862871',
                test: 'test',
            },
        }),
    updateUser: () =>
        Promise.resolve({
            data: {
                test: 'test',
            },
        }),
    unFollow: () =>
        Promise.resolve({
            data: {
                test: 'test',
            },
        }),
    follow: () =>
        Promise.resolve({
            data: {
                test: 'test',
            },
        }),
}));
const user: any = {
    token: 'ghfhgkjh',
    id: 'sjdghjksfh',
    name: 'Emily',
    surName: 'Inparis',
    password: '123',
    email: 'emilyinparis@gmail.com',
    profileImg: 'white',
    backImg: 'blue',
    collections: [],
    followers: [],
    following: [],
};
const token: string = '3782983271fff';
const id: string = 'id';

describe('Given load creators ', () => {
    describe('When load is called', () => {
        test('Dispatch is called with successful action', async () => {
            const dispatchMock = jest.fn();
            await loadUser(user)(dispatchMock);

            expect(dispatchMock).toHaveBeenCalledWith({
                type: actionTypes.loadUser,
                payload: {
                    _id: '17862871',
                    test: 'test',
                },
            });
        });
    });
    describe('When update is called', () => {
        test('Dispatch is called with successful action', async () => {
            const dispatchMock = jest.fn();

            await updateUser({ id }, token)(dispatchMock);

            expect(dispatchMock).toHaveBeenCalledWith({
                type: actionTypes.updateUser,
                payload: {
                    test: 'test',
                },
            });
        });
    });
    describe('When unfollow is called', () => {
        test('Dispatch is called with successful action', async () => {
            const dispatchMock = jest.fn();

            await unFollowUser(user, id)(dispatchMock);

            expect(dispatchMock).toHaveBeenCalledWith({
                type: actionTypes.unFollow,
                payload: {
                    test: 'test',
                },
            });
        });
    });
    describe('When follow is called', () => {
        test('Dispatch is called with successful action', async () => {
            const dispatchMock = jest.fn();

            await followUser(user, id)(dispatchMock);

            expect(dispatchMock).toHaveBeenCalledWith({
                type: actionTypes.follow,
                payload: {
                    test: 'test',
                },
            });
        });
    });
});
