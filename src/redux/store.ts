/* istanbul ignore file */
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import collectionsReducer from './collection/collection-reducer';
import itemsReducer from './item/item-reducer';
import loginRegisterReducer from './login-register/login-register-reducer';
import userReducer from './user/user-reducer';

export const store = configureStore({
    reducer: {
        loginRegister: loginRegisterReducer,
        collections: collectionsReducer,
        items: itemsReducer,
        user: userReducer,
    },
    // preloadedState,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
