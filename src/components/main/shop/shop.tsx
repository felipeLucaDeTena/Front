/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getItems } from '../../../services/api/item-api';
import loadItems from '../../../redux/item/action-creators';
import { useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import './shop.scss';

function ShopComponent() {
    const dispatch = useDispatch();
    const itemState = useAppSelector((state: RootState) => state.items);

    useEffect(() => {
        getItems().then((resp: any) => {
            dispatch(loadItems());
        });
    }, []);

    return (
        <div className="shp__container">
            <input className="shp__search" type="text" placeholder="Search" />
            <div className="shp__container__buttons">
                <button type="button" className="shp__button">
                    Category
                </button>
                <button type="button" className="shp__button">
                    Price
                </button>
            </div>
            <div className="shp__containter__images">
                {itemState.items.map((item: any, i: number) => (
                    <div key={i} className="shp__container__img">
                        {' '}
                        <a
                            href={item.shopUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="shp__img"
                                src={item.img}
                                alt="none"
                            />
                            <div className="overlay">
                                <p className="overlay__p">{item.brand}</p>
                                <p className="overlay__p">{item.price}$</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ShopComponent;
