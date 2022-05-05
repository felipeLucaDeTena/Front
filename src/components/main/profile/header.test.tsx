import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '../../../redux/test.utils';
import Header from './header';

describe('Given Form component', () => {
    describe('When form is submitted', () => {
        test('should be rendered', async () => {
            render(
                <MemoryRouter>
                    <Header />
                </MemoryRouter>
            );

            expect(screen.getAllByText(/profile/i));
        });
    });
});
