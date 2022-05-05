import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '../../redux/test.utils';
import Register from './registerPage';

describe('Given Form component', () => {
    describe('When form is submitted', () => {
        test('should be rendered', async () => {
            render(
                <MemoryRouter>
                    <Register />
                </MemoryRouter>
            );

            expect(screen.getAllByText(/Registration/i));
        });
    });
});
