import { CollectionI } from './collection-i';

export interface UserI {
    id: String;
    name: String;
    surName: String;
    email: String;
    password: String;
    profileImg: String;
    backImg: String;
    interFaceColor: String;
    collections: CollectionI[];
    followers: UserI[];
    following: UserI[];
}
export interface UserRegisterI {
    name: String;
    surName: String;
    email: String;
    password: String;
}
export interface UserLoginI {
    email: String;
    password: String;
}
