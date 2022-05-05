import React from 'react';
import FeedComponent from '../../components/main/feed/feed';
import NavBar from '../../components/nav-bar/nav-bar';
import './feedPage.scss';

function Feed({ togglePopup }: any) {
    return (
        <div className="feed__container">
            <NavBar togglePopup={togglePopup} />
            <FeedComponent />
        </div>
    );
}
export default Feed;
