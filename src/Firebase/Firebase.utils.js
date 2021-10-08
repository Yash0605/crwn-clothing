import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA98omIAxnbqPyGARazdP79QE1henMUxfs",
    authDomain: "boon-db.firebaseapp.com",
    databaseURL: "https://boon-db.firebaseio.com",
    projectId: "boon-db",
    storageBucket: "boon-db.appspot.com",
    messagingSenderId: "285921592173",
    appId: "1:285921592173:web:48a29b36395a0577ad9064",
    measurementId: "G-M9F1CE2878"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;