/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../../../services/api/collection-api';
import * as actions from '../../../redux/collection/action-creators';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import './feed.scss';
import { ItemI } from '../../../interfaces/item-i';

function FeedComponent() {
    const dispatch = useAppDispatch();

    const collectionState = useAppSelector(
        (state: RootState) => state.collections
    );

    useEffect(() => {
        api.getCollections().then(() => {
            dispatch(actions.loadCollections());
            console.log(collectionState.collections);
        });
    }, []);

    return (
        <div className="feedc__container">
            <div>
                <button className="feedc__button" type="button">
                    Trending
                </button>
                <button className="feedc__button" type="button">
                    Following
                </button>
            </div>
            <div className="feedc__container__images">
                {collectionState.collections.map(
                    (collection: any, i: number) => (
                        <Link to={`/details/${collection._id}`}>
                            <div className="feedc__container__img">
                                {' '}
                                <img
                                    className="feedc__img"
                                    src={collection.img}
                                    alt="none"
                                />
                                <div className="feedc__overlay">
                                    <p className="feedc__overlay__p">
                                        {collection.name}
                                    </p>
                                    <p className="feedc__overlay__p">
                                        Total price:
                                        {collection.items.reduce(
                                            (accum: Number, item: ItemI) =>
                                                +accum + +item.price,
                                            0
                                        )}
                                        $
                                    </p>
                                </div>
                            </div>
                        </Link>
                    )
                )}
            </div>
        </div>
    );
}
export default FeedComponent;
