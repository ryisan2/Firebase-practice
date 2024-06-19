// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import(getAuth)
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAey_zgam-o85ffOoUKF_r5iwhC6Hjljiw",
  authDomain: "fir-practice-24f69.firebaseapp.com",
  projectId: "fir-practice-24f69",
  storageBucket: "fir-practice-24f69.appspot.com",
  messagingSenderId: "1002505800729",
  appId: "1:1002505800729:web:01f7b49cb640eb45126e88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);