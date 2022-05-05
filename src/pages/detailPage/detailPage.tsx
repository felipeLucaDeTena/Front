import React from 'react';
import Detail from '../../components/main/detail/detail';
import NavBar from '../../components/nav-bar/nav-bar';
import './detailPage.scss';

function DetailPage({ togglePopup }: any) {
    return (
        <div className="detailpage__container">
            <NavBar togglePopup={togglePopup} />
            <Detail />
        </div>
    );
}
export default DetailPage;
