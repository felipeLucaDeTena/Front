import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import NavBar from '../../nav-bar/nav-bar';

import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import './header.scss';
import { loadUser } from '../../../redux/user/action-creators';

function Header({ setButtonPopUp, setfollowingPopUp, setfollowerPopUp }: any) {
    const dispatch = useAppDispatch();
    const userState = useAppSelector((state: RootState) => state.loginRegister);
    const imageState = useAppSelector((state: RootState) => state.user);

    useEffect(() => {
        dispatch(loadUser(userState));
    }, []);

    return (
        <div className="header__container">
            <NavBar />
            <div className="header__profile">
                <img
                    className="header__profile__banner"
                    src={imageState.backImg}
                    alt="none"
                />
                <div className="data__container">
                    <div className="image__container">
                        <div className="circle">
                            <img
                                className="header__profile__img"
                                src={imageState.profileImg}
                                alt="./profileholder"
                            />
                        </div>
                        <button
                            onClick={() => setButtonPopUp(true)}
                            type="button"
                            className="image__container__button"
                        >
                            {' '}
                            Edit profile
                        </button>
                    </div>
                    <div className="follower__container">
                        <p className="follower__name">{`${userState.name} ${userState.surName}`}</p>
                        <div className="follower__container-2">
                            <div className="follower__data">
                                <p className="follower__number">
                                    {userState.collections.length}
                                </p>
                                <p className="follower__text">posts</p>
                            </div>
                            <div className="follower__data">
                                <p className="follower__number">
                                    {userState.followers.length}
                                </p>
                                <button
                                    onClick={() => setfollowerPopUp(true)}
                                    type="button"
                                    className="follower__text__b"
                                >
                                    followers
                                </button>
                            </div>
                            <div className="follower__data">
                                <p className="follower__number">
                                    {userState.following.length}
                                </p>
                                <button
                                    onClick={() => setfollowingPopUp(true)}
                                    type="button"
                                    className="follower__text__b"
                                >
                                    following
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="favourites">
                <FontAwesomeIcon className="header__icon" icon={faHeart} />
                {userState.collections
                    .filter((collection: any) => collection.favourite)
                    .map((collection: any) => (
                        <div className="circle-2">
                            <img
                                className="favourites__img"
                                src={collection.img}
                                alt="none"
                            />
                        </div>
                    ))}
            </div>
            <div />
        </div>
    );
}
export default Header;
