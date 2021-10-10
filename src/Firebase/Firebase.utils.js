import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA98omIAxnbqPyGARazdP79QE1henMUxfs",
  authDomain: "boon-db.firebaseapp.com",
  databaseURL: "https://boon-db.firebaseio.com",
  projectId: "boon-db",
  storageBucket: "boon-db.appspot.com",
  messagingSenderId: "285921592173",
  appId: "1:285921592173:web:48a29b36395a0577ad9064",
  measurementId: "G-M9F1CE2878",
};

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;

  //* getting the user refence object from the firestore based on the signed in user
  const userRef = firestore.doc(`users/${user.uid}`);

  //* getting the snapshot to determine whther user stored in firestore or not
  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    // *Adding the user if not already present in firestore
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });

      console.log(`New user ${displayName} added`)
    } catch (error) {
      console.log('The user was not added, please check your code once!!!!!')
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
