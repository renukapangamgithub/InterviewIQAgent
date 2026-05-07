import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-a9de4.firebaseapp.com",
  projectId: "interviewiq-a9de4",
  storageBucket: "interviewiq-a9de4.firebasestorage.app",
  messagingSenderId: "931743560936",
  appId: "1:931743560936:web:6ce92348a96cc5dcdd055d"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth,provider}