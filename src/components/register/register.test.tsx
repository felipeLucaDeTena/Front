import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, screen } from '../../redux/test.utils';
import SignUp from './register';

describe('Given Form component', () => {
    describe('When form is submitted', () => {
        test('should be rendered', async () => {
            render(
                <MemoryRouter>
                    <SignUp />
                </MemoryRouter>
            );
            expect(
                await screen.findByPlaceholderText(/Email/i)
            ).toBeInTheDocument();
            expect(screen.getAllByText(/Registration/i));
            const inputEmail = screen.getByPlaceholderText(/Email/i);
            const inputPassword = screen.getByPlaceholderText(/Password/i);
            const inputSurName = screen.getByPlaceholderText(/Lastname/i);
            fireEvent.change(inputEmail, { target: { value: 'test' } });
            fireEvent.change(inputPassword, { target: { value: 'test' } });
            fireEvent.change(inputSurName, { target: { value: 'test' } });
            fireEvent.submit(screen.getByText(/Registration/));
        });
    });
});
