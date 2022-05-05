import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '../../redux/test.utils';
import Shop from './shopPage';

describe('Given Form component', () => {
    describe('When form is submitted', () => {
        test('should be rendered', async () => {
            render(
                <MemoryRouter>
                    <Shop />
                </MemoryRouter>
            );

            expect(screen.getAllByText(/category/i));
        });
    });
});
