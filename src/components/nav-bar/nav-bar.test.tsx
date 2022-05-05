import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '../../redux/test.utils';
import NavBar from './nav-bar';

describe('Given Form component', () => {
    describe('When form is submitted', () => {
        test('should be rendered', async () => {
            render(
                <MemoryRouter>
                    <NavBar />
                </MemoryRouter>
            );

            expect(screen.getAllByText(/Feed/i));
        });
    });
});
