// eslint-disable-next-line

import 'firebase/auth';
import 'firebase/firestore';

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDYwQRxZe60gA3bkGPz7QOM3NXNDFRXPX4",
  authDomain: "ai-mental-health-companion.firebaseapp.com",
  projectId: "ai-mental-health-companion",
  storageBucket: "ai-mental-health-companion.appspot.com",
  messagingSenderId: "285036091991",
  appId: "1:285036091991:web:2ba113554044c607696112",
  measurementId: "G-4WXCTMTWHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  // ✅ Define and export `app`
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// Google Sign-In Function
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("User Info:", result.user);
  } catch (error) {
    console.error("Google Sign-In Error:", error);
  }
};

// Logout Function
const logout = async () => {
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error) {
    console.error("Logout Error:", error);
  }
};

// ✅ Export `app` to fix your import issue
export { app, auth, provider, db, signInWithGoogle, logout, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink };
