/* istanbul ignore file */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addCollection } from '../../../redux/collection/action-creators';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';

function CreateForm({ togglePopup }: any) {
    const userState = useAppSelector((state: RootState) => state.loginRegister);
    const dispatch = useAppDispatch();

    const [collection, setCollection] = useState({
        img: '',
        name: '',
        createdBy: {},
        totalPrice: 0,
        items: [],
        favourite: false,
        likes: 0,
    });
    const navigate = useNavigate();

    const handleSubmit = async (ev: any) => {
        ev.preventDefault();
        dispatch(addCollection(collection, userState));
        navigate('/profile', { replace: true });
    };

    const handleChange = (ev: any, control: any) => {
        setCollection({ ...collection, [control]: ev.target.value });
    };

    return (
        <div className="createform__container">
            <p>Fill in the info to create a collection</p>
            <form onSubmit={handleSubmit}>
                <div className="createform">
                    <input
                        type="text"
                        name="collection-name"
                        id="collection-name"
                        placeholder="Name"
                        className="createform__input"
                        value={collection.name}
                        required
                        onChange={(ev) => handleChange(ev, 'collection-name')}
                        data-testid="dos"
                    />
                    <input
                        type="text"
                        name="collection-img"
                        id="collection-img"
                        placeholder="Image-Url"
                        className="createform__input"
                        value={collection.img}
                        required
                        onChange={(ev) => handleChange(ev, 'collection-img')}
                    />

                    <button type="submit" className="createform__button">
                        Create your Collection
                    </button>
                    <button onClick={() => togglePopup()} type="button">
                        x
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreateForm;
