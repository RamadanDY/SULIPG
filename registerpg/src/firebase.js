// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATM6kl3w_Gxxr9aprXZ0HZRIrFvn4vULQ",
  authDomain: "auth-development-72c00.firebaseapp.com",
  projectId: "auth-development-72c00",
  storageBucket: "auth-development-72c00.appspot.com",
  messagingSenderId: "589658577272",
  appId: "1:589658577272:web:473af449bb2ee9ef28908d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
