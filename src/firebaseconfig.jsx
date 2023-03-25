// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider ,getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAPAM32d6yGytGBYYMVqzYEeB-NnGvVpdY",
  authDomain: "global-care-go.firebaseapp.com",
  projectId: "global-care-go",
  storageBucket: "global-care-go.appspot.com",
  messagingSenderId: "294147855997",
  appId: "1:294147855997:web:647d06e897f273b7594314",
  measurementId: "G-GZ7WFFWCFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const googleprovider = new GoogleAuthProvider();
export const auth= new getAuth()
export const db = getFirestore(app);