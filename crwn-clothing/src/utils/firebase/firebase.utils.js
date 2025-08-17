import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjFgTCv91kwvCjDYaJ1ZhFM3-nqZZThb4",
  authDomain: "crwn-clothing-db-bc365.firebaseapp.com",
  projectId: "crwn-clothing-db-bc365",
  storageBucket: "crwn-clothing-db-bc365.firebasestorage.app",
  messagingSenderId: "423915317765",
  appId: "1:423915317765:web:3e9c855ccd2adeb049ca6c",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
