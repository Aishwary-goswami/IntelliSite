// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, ProviderId} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "intellisite-cde07.firebaseapp.com",
  projectId: "intellisite-cde07",
  storageBucket: "intellisite-cde07.firebasestorage.app",
  messagingSenderId: "406787180562",
  appId: "1:406787180562:web:d81805622032ef3d9130cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth,provider};