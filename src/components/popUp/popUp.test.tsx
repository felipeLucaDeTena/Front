import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '../../redux/test.utils';
import Popup from './popUp';

describe('Given Form component', () => {
    describe('When form is submitted', () => {
        test('should be rendered', async () => {
            render(
                <MemoryRouter>
                    <Popup />
                </MemoryRouter>
            );
            expect(screen.getByTestId('custom-element')).toBeInTheDocument();
        });
    });
});
