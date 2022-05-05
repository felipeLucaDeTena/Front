import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '../../../redux/test.utils';
import Following from './following';

describe('Given Form component', () => {
    describe('When form is submitted', () => {
        test('should be rendered', async () => {
            render(
                <MemoryRouter>
                    <Following />
                </MemoryRouter>
            );

            expect(screen.getAllByText(/Following/i));
        });
    });
});
