/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import './header.scss';
import { loadUser } from '../../../redux/user/action-creators';
import './main.scss';
import { removeCollection } from '../../../redux/collection/action-creators';

function Main() {
    const dispatch = useAppDispatch();
    const userState = useAppSelector((state: RootState) => state.loginRegister);

    useEffect(() => {
        dispatch(loadUser(userState));
        console.log('el user esta logeado');
    }, []);

    const handleClick = async (e: any) => {
        console.log('soy handle click');
        const collectionId = e.target.dataset.collectionid;

        dispatch(removeCollection(collectionId, userState));
    };

    return (
        <div className="main__outer">
            <div className="main__container">
                <Link to="/create">
                    <button className="main__button" type="button">
                        <span className="main__add">+</span>
                        Add a new wishlist
                    </button>
                </Link>
                <div className="main__collection__container">
                    {userState.collections.map((collection: any) => (
                        <div className="main__collection">
                            <Link
                                className="main__link"
                                to={`/details/${collection._id}`}
                            >
                                <img
                                    className="main__collection__img"
                                    src={collection.img}
                                    alt="none"
                                />
                            </Link>
                            <button
                                data-testid="custom-delete"
                                onClick={handleClick}
                                type="button"
                                className="overlay__delete__b"
                                data-collectionid={collection._id}
                            >
                                x
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Main;
