import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCE-9MWTHSXh-t1zn2vzSYWVWQvYdTHDU4",
  authDomain: "crwn-db-kdev.firebaseapp.com",
  projectId: "crwn-db-kdev",
  storageBucket: "crwn-db-kdev.appspot.com",
  messagingSenderId: "423349282678",
  appId: "1:423349282678:web:de9ceb4ae2711c0ecb3c57",
  measurementId: "G-YBHMCM80LJ",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
