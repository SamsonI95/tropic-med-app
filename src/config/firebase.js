import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import {getStorage, ref } from 'firebase/storage';
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBP9U7eA_VSVpZJW8vBgys1XaMssVtpRiM",
  authDomain: "tropicmed-62a2d.firebaseapp.com",
  projectId: "tropicmed-62a2d",
  storageBucket: "tropicmed-62a2d.appspot.com",
  messagingSenderId: "580301518312",
  appId: "1:580301518312:web:82070570ecc3eccc68205d",
  measurementId: "G-2S0LWWT08E"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage(app);
export const storageRef = ref(storage);
export const provider = new GoogleAuthProvider();
