/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import './header.scss';
import { loadUser, unFollowUser } from '../../../redux/user/action-creators';
import './following.scss';

function Following({ setfollowingPopUp }: any) {
    const dispatch = useAppDispatch();
    const userState = useAppSelector((state: RootState) => state.user);
    const loginState = useAppSelector(
        (state: RootState) => state.loginRegister
    );

    useEffect(() => {
        dispatch(loadUser(loginState));
    }, []);

    // const handleClickUnfollow = async () => {
    //     dispatch(unFollowUser(loginState, userState._id));
    // };

    return (
        <div className="followers">
            <button
                onClick={() => setfollowingPopUp(false)}
                className="followers__button"
                type="button"
            >
                {' '}
                x
            </button>
            <h1 className="followers__title">Following</h1>
            {userState.following.map((follower: any) => (
                <div className="followers__follower">
                    <div className="circle-2">
                        <img
                            className="followers__img"
                            src={follower.profileImg}
                            alt="none"
                        />
                    </div>
                    <p className="followers__name">
                        {`${follower.name}  
                        ${follower.surName}`}
                    </p>
                    <button
                        className="collection__text__button"
                        onClick={() =>
                            dispatch(unFollowUser(loginState, follower._id))
                        }
                        type="button"
                    >
                        Unfollow
                    </button>
                </div>
            ))}
        </div>
    );
}
export default Following;
