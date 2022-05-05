import React, { SyntheticEvent, useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { storage } from '../../../firebase/connection';
import { useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import { updateUser } from '../../../redux/user/action-creators';
import './form.scss';

function Form({ setButtonPopUp }: any) {
    const [image, setImage] = useState<any>(undefined);

    const dispatch = useDispatch();

    const userState = useAppSelector(
        (state: RootState) => state.loginRegister as any
    );
    const handleImageChange = (e: any) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        const imageRef = ref(storage, uuid() + image.name);
        uploadBytes(imageRef, image)
            .then(() => {
                getDownloadURL(imageRef)
                    .then((newUrl) => {
                        console.log(newUrl, userState);
                        dispatch(updateUser({ profileImg: newUrl }, userState));
                    })
                    .catch((error) => {
                        console.log(
                            error.message,
                            'error getting the image url'
                        );
                    });
                setImage(null);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
    const handleSubmitBanner = (e: SyntheticEvent) => {
        e.preventDefault();
        const imageRef = ref(storage, uuid() + image.name);
        uploadBytes(imageRef, image)
            .then(() => {
                getDownloadURL(imageRef)
                    .then((newUrl) => {
                        console.log(newUrl, userState);
                        dispatch(updateUser({ backImg: newUrl }, userState));
                    })
                    .catch((error) => {
                        console.log(
                            error.message,
                            'error getting the image url'
                        );
                    });
                setImage(null);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return (
        <div className="form">
            <div className="form__title__container">
                <h1 className="form__title">Edit Profile</h1>
                <button
                    className="form__button__close"
                    type="button"
                    onClick={() => setButtonPopUp(false)}
                >
                    x
                </button>
            </div>

            <div className="form__input">
                <label className="form__label" htmlFor="profileImg">
                    {' '}
                    Profile Image
                </label>
                <input
                    id="profileImg"
                    className="form__input__file"
                    type="file"
                    onChange={handleImageChange}
                />
                <button
                    type="submit"
                    className="form__button"
                    onClick={handleSubmit}
                >
                    Upload
                </button>
            </div>
            <div className="form__input">
                <label className="form__label" htmlFor="bannerImg">
                    {' '}
                    Banner Image
                </label>
                <input
                    id="bannerImg"
                    className="form__input__file"
                    type="file"
                    onChange={handleImageChange}
                />
                <button
                    type="submit"
                    className="form__button"
                    onClick={handleSubmitBanner}
                >
                    Upload
                </button>
            </div>
            <div className="form__input">
                <label className="form__label" htmlFor="profileImg">
                    {' '}
                    Interface Color
                </label>
                <input
                    id="profileImg"
                    className="form__input__color"
                    // value={color}
                    type="color"
                    onChange={handleImageChange}
                />
                <button
                    type="submit"
                    className="form__button"
                    onClick={handleSubmit}
                >
                    Change
                </button>
            </div>
        </div>
    );
}

export default Form;
