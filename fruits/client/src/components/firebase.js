// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY9VtJrSXfZs63Hj6D5bWZ2CRIlB20de4",
  authDomain: "fruitai-d5d3b.firebaseapp.com",
  projectId: "fruitai-d5d3b",
  storageBucket: "fruitai-d5d3b.appspot.com",
  messagingSenderId: "860696593996",
  appId: "1:860696593996:web:84686496303df4ceb4d6e9",
  measurementId: "G-6EDZ980NT3"
};
//hi
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);