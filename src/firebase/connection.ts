// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAIYnxhYmuX5F0QrZuHzrwuc6XZeLHJQCc',
    authDomain: 'wishy-c9ec8.firebaseapp.com',
    projectId: 'wishy-c9ec8',
    storageBucket: 'wishy-c9ec8.appspot.com',
    messagingSenderId: '51477896388',
    appId: '1:51477896388:web:0496030eb86838f446fd91',
    measurementId: 'G-YDR23DCVC2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, app };
