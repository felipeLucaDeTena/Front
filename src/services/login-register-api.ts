import axios from 'axios';
import { UserRegisterI, UserLoginI } from '../interfaces/user-i';

const LOGIN_API = 'http://localhost:3600/auth/login/';

const REGISTER_API = 'http://localhost:3600/auth/register/';

export function login(user: UserLoginI) {
    return axios.post(LOGIN_API, user);
}

export function register(user: UserRegisterI) {
    return axios.post(REGISTER_API, user);
}
