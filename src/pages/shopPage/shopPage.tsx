import React from 'react';
import ShopComponent from '../../components/main/shop/shop';
import NavBar from '../../components/nav-bar/nav-bar';
import './shop.scss';

function Shop({ togglePopup }: any) {
    return (
        <div className="shop__container">
            <NavBar togglePopup={togglePopup} />
            <ShopComponent />
        </div>
    );
}
export default Shop;
