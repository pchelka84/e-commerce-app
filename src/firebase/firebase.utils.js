import firebase from 'firebase';
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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

