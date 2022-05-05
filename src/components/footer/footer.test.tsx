import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '../../redux/test.utils';
import Footer from './footer';

describe('Given Form component', () => {
    describe('When form is submitted', () => {
        test('should be rendered', async () => {
            render(
                <MemoryRouter>
                    <Footer />
                </MemoryRouter>
            );

            expect(screen.getAllByText(/ishy/i));
        });
    });
});
