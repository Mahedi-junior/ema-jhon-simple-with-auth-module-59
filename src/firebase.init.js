// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries;

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYOX9q84Rc_B191g9FNrUWgH8A6uUuZWM",
    authDomain: "ema-jhon-simple-f05f6.firebaseapp.com",
    projectId: "ema-jhon-simple-f05f6",
    storageBucket: "ema-jhon-simple-f05f6.appspot.com",
    messagingSenderId: "893205977194",
    appId: "1:893205977194:web:ebd93ea4d6a151dc3b9213"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;