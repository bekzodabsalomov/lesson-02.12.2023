import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD1DjMNvq0x1iZYjPxY1p2HF2WMMtltFDc",
    authDomain: "counter-ibr.firebaseapp.com",
    projectId: "counter-ibr",
    storageBucket: "counter-ibr.appspot.com",
    messagingSenderId: "715686682594",
    appId: "1:715686682594:web:b69e1fe4aa9808d96b23bb"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()