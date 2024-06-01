// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth,browserLocalPersistence } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_z9yKwSEcc3xmmC6vnpSL-lilitvWQkk",
  authDomain: "afaq-school-blida-db.firebaseapp.com",
  projectId: "afaq-school-blida-db",
  storageBucket: "afaq-school-blida-db.appspot.com",
  messagingSenderId: "382799389316",
  appId: "1:382799389316:web:6f04ae47daada135e018d1",
  measurementId: "G-EFP9MHXNTV"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app,{ persistence: browserLocalPersistence});
const db = getFirestore(app)
const storage = getStorage(app);
const functions = getFunctions(app);
// connectFunctionsEmulator(functions, "127.0.0.1", 5001);
export {db , storage,functions}
export default app 