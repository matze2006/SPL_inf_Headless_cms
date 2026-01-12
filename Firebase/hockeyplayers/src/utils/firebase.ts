// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHVSM4Ohz_5AxBrP3Yd9wD3gWmlkcCo2s",
  authDomain: "fir-test-863e4.firebaseapp.com",
  projectId: "fir-test-863e4",
  storageBucket: "fir-test-863e4.firebasestorage.app",
  messagingSenderId: "718429091532",
  appId: "1:718429091532:web:1339f31e9adaad1ea37469",
  measurementId: "G-9SYM9G8826"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
export const db = getFirestore(app);