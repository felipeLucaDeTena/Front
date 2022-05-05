import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '../../../redux/test.utils';

import Detail from './detail';

describe('Given Form component', () => {
    describe('When form is submitted', () => {
        test('should be rendered', async () => {
            render(
                <MemoryRouter>
                    <Detail />
                </MemoryRouter>
            );

            expect(screen.getAllByText(/Created/i));
            // fireEvent.click(screen.getByRole('button', { name: 'Unfollow' }));
            // expect(unFollowUser).toHaveBeenCalled();
            // fireEvent.click(screen.getByRole('button', { name: 'Follow' }));
            // expect(followUser).toHaveBeenCalled();
        });
    });
});
