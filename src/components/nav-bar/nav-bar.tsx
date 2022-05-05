import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import './nav-bar.scss';

function NavBar({ togglePopup }: any) {
    const userState = useAppSelector((state: RootState) => state.loginRegister);

    return (
        <nav className="nav">
            <svg
                className="nav__logo"
                width="3.5vw"
                height="4vw"
                viewBox="0 0 120 148"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M54.4615 129.99C48.0963 129.99 11.5303 141.392 7.02944 139.345C2.52856 137.298 0 134.522 0 131.627V87.9661V-13H24V131.627L36.9231 123.441L48 93.4237H72V131.627L92.3077 137.085L82.1538 93.4237L120 87.9661V131.627C120 134.522 117.471 137.298 112.971 139.345C108.47 141.392 102.365 148 96 148L54.4615 129.99Z"
                    fill="#00000053"
                />
            </svg>
            <Link to="/feed" className="nav__links">
                <span>Feed</span>
            </Link>

            <Link to="/shop" className="nav__links">
                <span>Shop</span>
            </Link>
            {userState.isLogged ? (
                <>
                    <Link to="/create" className="nav__links">
                        <span>Create</span>
                    </Link>
                    <Link to="/profile" className="nav__links-p">
                        <span>p</span>
                    </Link>
                </>
            ) : (
                <button
                    onClick={togglePopup}
                    className="nav__links-b"
                    type="button"
                >
                    {' '}
                    Login{' '}
                </button>
            )}
        </nav>
    );
}
export default NavBar;
