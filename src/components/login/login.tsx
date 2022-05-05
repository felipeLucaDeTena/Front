import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { logIn } from '../../redux/login-register/action-creators';
import './login.scss';

function LogIn({ togglePopup }: any) {
    const [login, setLogin] = useState({
        email: '',
        password: '',
    });

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleSubmit = async (ev: any) => {
        ev.preventDefault();
        dispatch(logIn(login));
        navigate('/feed');
    };

    const handleChange = (ev: any, control: any) => {
        setLogin({ ...login, [control]: ev.target.value });
    };

    return (
        <div className="container">
            <div className="container__login">
                <div className="header">
                    <div className="header__logo">
                        <svg
                            className="header__logo__svg"
                            width="60"
                            height="74"
                            viewBox="0 0 120 148"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M54.4615 129.99C48.0963 129.99 11.5303 141.392 7.02944 139.345C2.52856 137.298 0 134.522 0 131.627V87.9661V-13H24V131.627L36.9231 123.441L48 93.4237H72V131.627L92.3077 137.085L82.1538 93.4237L120 87.9661V131.627C120 134.522 117.471 137.298 112.971 139.345C108.47 141.392 102.365 148 96 148L54.4615 129.99Z"
                                fill="#00000053"
                            />
                        </svg>
                        <span className="header__logo__letters">ishy</span>
                        <button
                            onClick={togglePopup}
                            className="header__close"
                            type="button"
                        >
                            {' '}
                            x{' '}
                        </button>
                    </div>
                    <h1 className="header__h1">Login</h1>
                    <div className="container__p">
                        <p className="header__p">Welcome back friend!</p>
                        <p className="header__p">
                            Login to wishy to acces all our awsome features.
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="container__form">
                        <input
                            type="text"
                            name="user-email"
                            id="user-email"
                            placeholder="Email"
                            className="container__form__input"
                            value={login.email}
                            required
                            onChange={(ev) => handleChange(ev, 'email')}
                        />
                        <input
                            type="password"
                            name="user-password"
                            id="user-password"
                            placeholder="Password"
                            className="container__form__input"
                            value={login.password}
                            required
                            onChange={(ev) => handleChange(ev, 'password')}
                        />

                        <button
                            type="submit"
                            className="container__form__button"
                        >
                            LOGIN
                        </button>

                        <span className="text">or</span>
                        <Link to="/register">
                            <button
                                type="button"
                                className="container__form__button"
                            >
                                Register
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LogIn;
