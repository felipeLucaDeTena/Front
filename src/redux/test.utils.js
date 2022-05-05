/* eslint-disable react/prop-types */
// test-utils.js
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import loginRegisterReducer from './login-register/login-register-reducer';
import collectionsReducer from './collection/collection-reducer';
import itemsReducer from './item/item-reducer';
import userReducer from './user/user-reducer';
// Import your own reducer

function render(
    ui,
    {
        preloadedState,
        store = configureStore({
            reducer: {
                loginRegister: loginRegisterReducer,
                collections: collectionsReducer,
                items: itemsReducer,
                user: userReducer,
            },
            preloadedState,
        }),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>;
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
