import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
    faFacebookF,
    faInstagram,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import './footer.scss';

function Footer() {
    return (
        <div className="footer__outer">
            <div className="footer">
                <div className="footer__container">
                    <div className="logo">
                        <svg
                            className="logo__svg"
                            width="4vw"
                            height="4.5vw"
                            viewBox="0 0 120 148"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M54.4615 129.99C48.0963 129.99 11.5303 141.392 7.02944 139.345C2.52856 137.298 0 134.522 0 131.627V87.9661V-13H24V131.627L36.9231 123.441L48 93.4237H72V131.627L92.3077 137.085L82.1538 93.4237L120 87.9661V131.627C120 134.522 117.471 137.298 112.971 139.345C108.47 141.392 102.365 148 96 148L54.4615 129.99Z"
                                fill="#00000053"
                            />
                        </svg>
                        <p className="title">ishy</p>
                    </div>
                    <p className="footer__adress">Wishy avenue 84</p>
                    <p className="footer__adress">Los Angeles 28058</p>
                    <p className="footer__adress">+1768866454</p>
                </div>
                <div className="footer__container">
                    <p className="title">Follow us at</p>
                    <div className="icons">
                        <FontAwesomeIcon
                            className="footer__icon"
                            icon={faFacebookF as IconProp}
                        />
                        <FontAwesomeIcon
                            className="footer__icon"
                            icon={faInstagram as IconProp}
                        />
                        <FontAwesomeIcon
                            className="footer__icon"
                            icon={faTwitter as IconProp}
                        />
                    </div>
                </div>
                <div className="footer__container">
                    <p className="title">Tearms</p>
                    <p className="title">About</p>
                </div>
            </div>
            <div className="br" />
        </div>
    );
}
export default Footer;
