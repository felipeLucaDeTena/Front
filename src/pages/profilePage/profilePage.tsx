import React, { useState } from 'react';
import Followers from '../../components/main/profile/follower';
import Following from '../../components/main/profile/following';
import Form from '../../components/main/profile/form';
import Header from '../../components/main/profile/header';
import Main from '../../components/main/profile/main';
import Popup from '../../components/popUp/popUp';
import './profile.scss';

function Profile() {
    const [buttonPopUp, setButtonPopUp] = useState(false);
    const [followingPopUp, setfollowingPopUp] = useState(false);
    const [followerPopUp, setfollowerPopUp] = useState(false);

    return (
        <div className="profile__outer">
            <Header
                setfollowingPopUp={setfollowingPopUp}
                setButtonPopUp={setButtonPopUp}
                setfollowerPopUp={setfollowerPopUp}
            />
            <Main />
            <Popup trigger={buttonPopUp}>
                <Form setButtonPopUp={setButtonPopUp} />
            </Popup>
            <Popup trigger={followingPopUp}>
                <Following setfollowingPopUp={setfollowingPopUp} />
            </Popup>

            <Popup trigger={followerPopUp}>
                <Followers setfollowerPopUp={setfollowerPopUp} />
            </Popup>
        </div>
    );
}
export default Profile;
