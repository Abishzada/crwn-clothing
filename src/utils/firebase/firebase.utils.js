import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtekDfVSoLZucHkVQyVndDA9xCHYmDcZg",
  authDomain: "crwn-clothing-db-52070.firebaseapp.com",
  projectId: "crwn-clothing-db-52070",
  storageBucket: "crwn-clothing-db-52070.appspot.com",
  messagingSenderId: "552614790563",
  appId: "1:552614790563:web:708c71768fa1333e6ac616",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, provider);
export const singInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  //   console.log("userdovref-", userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log("usSnapshot-", userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating user-", error.message);
    }
  }
  return userDocRef;
};