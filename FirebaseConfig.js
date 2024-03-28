// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw3jl_NzrCJu3tLocBeh4Ht0rq3RPoqVk",
  authDomain: "wordle-game-a825b.firebaseapp.com",
  databaseURL: "https://wordle-game-a825b-default-rtdb.firebaseio.com",
  projectId: "wordle-game-a825b",
  storageBucket: "wordle-game-a825b.appspot.com",
  messagingSenderId: "80974884525",
  appId: "1:80974884525:web:543bdf36ea611c96b2a024"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
