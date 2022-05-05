/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import './header.scss';
import './follower.scss';
import {
    followUser,
    loadUser,
    unFollowUser,
} from '../../../redux/user/action-creators';

function Followers({ setfollowerPopUp }: any) {
    const dispatch = useAppDispatch();
    const userState = useAppSelector((state: RootState) => state.user);
    const loginState = useAppSelector(
        (state: RootState) => state.loginRegister
    );

    useEffect(() => {
        dispatch(loadUser(loginState));
    }, []);

    // const handleClickFollow = async () => {
    //     dispatch(followUser(loginState, userState._id));
    // };
    // const handleClickUnfollow = async () => {
    //     dispatch(unFollowUser(loginState, userState._id));
    // };
    return (
        <div className="followers">
            <button
                onClick={() => setfollowerPopUp(false)}
                className="followers__button"
                type="button"
            >
                {' '}
                x
            </button>
            <h1 className="followers__title">Followers</h1>
            {userState.followers.map((follower: any) => (
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
                    {loginState.following.some(
                        (user: any) => user !== follower._id
                    ) ? (
                        <button
                            className="collection__text__button"
                            onClick={() =>
                                dispatch(unFollowUser(loginState, follower._id))
                            }
                            type="button"
                        >
                            Unfollow
                        </button>
                    ) : (
                        <button
                            className="collection__text__button"
                            onClick={() =>
                                dispatch(followUser(loginState, follower._id))
                            }
                            type="button"
                        >
                            Follow
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
}
export default Followers;
