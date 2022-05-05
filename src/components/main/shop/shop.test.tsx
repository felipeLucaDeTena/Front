import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '../../../redux/test.utils';
import ShopComponent from './shop';

describe('Given Form component', () => {
    describe('When form is submitted', () => {
        test('should be rendered', async () => {
            render(
                <MemoryRouter>
                    <ShopComponent />
                </MemoryRouter>
            );

            expect(screen.getAllByText(/Category/i));
        });
    });
});
