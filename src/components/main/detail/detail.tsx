/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import './detail.scss';
import { getCollection } from '../../../services/api/collection-api';
import { ItemI } from '../../../interfaces/item-i';
import { RootState } from '../../../redux/store';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { followUser, unFollowUser } from '../../../redux/user/action-creators';
import { toggleCollection } from '../../../redux/collection/action-creators';

function Detail() {
    const userState = useAppSelector((state: RootState) => state.loginRegister);
    const [collection, setCollection] = useState({
        _id: '',
        img: '',
        name: '',
        createdBy: { name: '', _id: '' },
        totalPrice: 0,
        items: [],
        favourite: false,
        likes: 0,
    });
    const dispatch = useAppDispatch();
    const { id } = useParams();

    useEffect(() => {
        getCollection(id).then((resp: any) => {
            setCollection(resp.data);
        });
    }, []);

    const handleClickFollow = async () => {
        dispatch(followUser(userState, collection.createdBy._id));
    };
    const handleClickUnfollow = async () => {
        dispatch(unFollowUser(userState, collection.createdBy._id));
    };
    const handleClickFavourite = async () => {
        dispatch(
            toggleCollection({ favourite: !collection.favourite }, userState)
        );
    };

    return (
        <div className="detail__container">
            <div className="collection__container">
                <div className="collection__container__img">
                    <img
                        className="collection__img"
                        src={collection.img}
                        alt="none"
                    />
                </div>
                <div className="collection__text__container">
                    <h1 className="collection__text__name">
                        {collection.name}
                    </h1>
                    <p className="collection__text__p">Created by</p>
                    <p className="collection__text__p">
                        {collection.createdBy.name}
                    </p>

                    {userState.following.some(
                        (follower: any) => follower === collection.createdBy._id
                    ) ? (
                        <button
                            className="collection__text__button"
                            onClick={handleClickUnfollow}
                            type="button"
                        >
                            Unfollow
                        </button>
                    ) : (
                        <button
                            className="collection__text__button"
                            onClick={handleClickFollow}
                            type="button"
                        >
                            Follow
                        </button>
                    )}

                    <p className="collection__text__p">
                        Total price:
                        {collection.items.reduce(
                            (accum: Number, item: ItemI) =>
                                +accum + +item.price,
                            0
                        )}
                        $
                    </p>
                    <FontAwesomeIcon
                        onClick={handleClickFavourite}
                        className="collection__text__icon"
                        icon={faHeart}
                    />
                </div>
            </div>
            <div className="detail__br" />
            <div className="detail__items__container">
                <p className="detail__items__p">Shop the Pieces</p>
                <div className="detail__items__container__items">
                    {collection.items.map((item: any) => (
                        <div className="detail__items__container__img">
                            {' '}
                            <a
                                href={item.shopUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    className="detail__items__img"
                                    src={item.img}
                                    alt="none"
                                />
                                <div className="overlay__details">
                                    <p className="overlay__details__p">
                                        {item.brand}
                                    </p>
                                    <p className="overlay__details__p">
                                        {item.price}$
                                    </p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Detail;
