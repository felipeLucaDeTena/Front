import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '../../../redux/test.utils';
import Popup from '../../popUp/popUp';
import Form from './form';

jest.mock('firebase/storage', () => ({
    ...jest.requireActual('firebase/storage'),
    ref: jest.fn().mockReturnValue({}),
    uploadBytes: jest.fn().mockResolvedValue({}),
    getDownloadURL: jest.fn().mockResolvedValue('test.com/emily.jpg'),
}));

describe('Given Form component', () => {
    describe('When form is submitted', () => {
        test('should be rendered', async () => {
            render(
                <MemoryRouter>
                    <Form />
                </MemoryRouter>
            );
            expect(screen.getAllByText(/Upload/i));
        });
    });
    test('modal shows the children and a close button', () => {
        const handleClose = jest.fn();

        const { getByText } = render(
            <Popup trigger={handleClose}>
                <div>test</div>
            </Popup>
        );

        expect(getByText('test')).toBeTruthy();
    });
});
