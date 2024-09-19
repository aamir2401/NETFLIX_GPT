// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAwM_6lrIauwKKKTVt6B2S4U91dFFEGGc",
  authDomain: "netflixgpt-82323.firebaseapp.com",
  projectId: "netflixgpt-82323",
  storageBucket: "netflixgpt-82323.appspot.com",
  messagingSenderId: "434592064359",
  appId: "1:434592064359:web:19a2ead2113b6a52ccc5c2",
  measurementId: "G-0QTGM90X6D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()