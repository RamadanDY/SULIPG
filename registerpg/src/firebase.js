import firebase from "firebase/app";
import "firebase/auth";

const app = (firebase.initializeApp = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

// we export the authentication that firebase gives us
export const auth = app.auth();
export default app;
const firestore = getFirestore(app);
const analytics = getAnalytics(app);

export { firestore, analytics };
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "@firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBMz8DtO0YSz45wJlPMYuhEF-R3cnooYn8",
//   authDomain: "suandli.firebaseapp.com",
//   projectId: "suandli",
//   storageBucket: "suandli.appspot.com",
//   messagingSenderId: "635286931982",
//   appId: "1:635286931982:web:8710cd6f09b5fb51614a5f",
//   measurementId: "G-2S0WS5XS46",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const firestore = getFirestore(app);
