// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOG865Im_O4r0k4nCLkm2wGUAtaWATQkw",
  authDomain: "paginawebtpx.firebaseapp.com",
  projectId: "paginawebtpx",
  storageBucket: "paginawebtpx.appspot.com",
  messagingSenderId: "393980985944",
  appId: "1:393980985944:web:dba9d4ecdfa0cb61a7402d",
  measurementId: "G-9JX8WXHTW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)