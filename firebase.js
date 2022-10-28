// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxl37XByqM3gfNXYF1wy1HphXPE6h9MDc",
  authDomain: "amalarrrashid.firebaseapp.com",
  projectId: "amalarrrashid",
  storageBucket: "amalarrrashid.appspot.com",
  messagingSenderId: "435158621137",
  appId: "1:435158621137:web:0fd9830b00b2996f381ef0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const Provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);
export { auth, Provider, db, storage }