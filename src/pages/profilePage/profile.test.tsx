import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '../../redux/test.utils';
import Profile from './profilePage';

describe('Given Form component', () => {
    describe('When form is submitted', () => {
        test('should be rendered', async () => {
            render(
                <MemoryRouter>
                    <Profile />
                </MemoryRouter>
            );

            expect(screen.getAllByText(/profile/i));
        });
    });
});
