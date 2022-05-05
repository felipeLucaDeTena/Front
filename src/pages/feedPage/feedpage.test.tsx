import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Feed from './feedPage';
import { render, screen } from '../../redux/test.utils';

describe('Given Form component', () => {
    describe('When form is submitted', () => {
        test('should be rendered', async () => {
            render(
                <MemoryRouter>
                    <Feed />
                </MemoryRouter>
            );

            expect(screen.getAllByText(/Trending/i));
        });
    });
});
