import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '../../redux/test.utils';
import DetailPage from './detailPage';

describe('Given Form component', () => {
    describe('When form is submitted', () => {
        test('should be rendered', async () => {
            render(
                <MemoryRouter>
                    <DetailPage />
                </MemoryRouter>
            );

            expect(screen.getAllByText(/Created/i));
        });
    });
});
