import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config ={
  apiKey: "AIzaSyDxyx2iyIrutMhMS0CsCyvI7j8T7KOXWvk",
  authDomain: "crwn-db-5bcde.firebaseapp.com",
  projectId: "crwn-db-5bcde",
  storageBucket: "crwn-db-5bcde.appspot.com",
  messagingSenderId: "356517559096",
  appId: "1:356517559096:web:1312272217b12de5291fcd",
  measurementId: "G-HEKH99GZGF"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // console.log(snapShot);

  // checks if the snapShot exists at this place
  if (!snapShot.exists) {
    const  { displayName, email } = userAuth;
    const createdAt = new Date();

    // Create snapShot at the current place if it doesn't exists
    try {
      await userRef.set({
        displayName, 
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
}

if (firebase.apps.length === 0) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

