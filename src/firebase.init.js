// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAH2jA26F1nhkmShvGfNRctw3CGUokUdkM",
    authDomain: "ema-john-simple-36a8d.firebaseapp.com",
    projectId: "ema-john-simple-36a8d",
    storageBucket: "ema-john-simple-36a8d.appspot.com",
    messagingSenderId: "15926131729",
    appId: "1:15926131729:web:0da42beb9a115e1d0285b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;