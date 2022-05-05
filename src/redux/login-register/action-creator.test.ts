import { logIn, logOut, signUp } from './action-creators';
import actionTypes from './action-types';

jest.mock('../../services/login-register-api.ts', () => ({
    login: () =>
        Promise.resolve({
            data: {
                test: 'test',
            },
        }),
    register: () =>
        Promise.resolve({
            data: {
                test: 'test',
            },
        }),
}));

const userLogin: any = {
    email: 'Emily@helloworld.com',
    password: '123',
};

const userSignup: any = {
    name: 'emily',
    surName: 'wolley',
    email: 'Emily@helloworld.com',
    password: '123',
};
describe('Given actions creators ', () => {
    describe('When login is called', () => {
        test('Dispatch is called with successful action', async () => {
            const dispatchMock = jest.fn();

            await logIn(userLogin)(dispatchMock);

            expect(dispatchMock).toHaveBeenCalledWith({
                type: actionTypes.logIn,
                payload: {
                    test: 'test',
                },
            });
        });
    });
    describe('When register is called', () => {
        test('Dispatch is called with successful action', async () => {
            const dispatchMock = jest.fn();

            await signUp(userSignup)(dispatchMock);

            expect(dispatchMock).toHaveBeenCalledWith({
                type: actionTypes.signUp,
                payload: {
                    test: 'test',
                },
            });
        });
    });

    describe('When logout is called', () => {
        test('Dispatch is called with successful action', async () => {
            const dispatchMock = jest.fn();

            await logOut()(dispatchMock);

            expect(dispatchMock).toHaveBeenCalledWith({
                type: actionTypes.logOut,
            });
        });
    });
});
