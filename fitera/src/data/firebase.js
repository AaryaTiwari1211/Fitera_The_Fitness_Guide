// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBd1owlwZh5VcYtxgqbKXidEv4slJfp54g",
    authDomain: "fitera-8cb5a.firebaseapp.com",
    projectId: "fitera-8cb5a",
    storageBucket: "fitera-8cb5a.appspot.com",
    messagingSenderId: "823336540984",
    appId: "1:823336540984:web:c6f9a51b201a9eadef3fcd",
    measurementId: "G-51MB9J9W0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
const analytics = getAnalytics(app);