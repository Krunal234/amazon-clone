import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9ZDW74MYUM6ZFnbhjzoU3ZRua-Ab8MRU",
  authDomain: "clone-app-94204.firebaseapp.com",
  projectId: "clone-app-94204",
  storageBucket: "clone-app-94204.appspot.com",
  messagingSenderId: "547650938367",
  appId: "1:547650938367:web:4103ca4f9a63cda422b3ca",
  measurementId: "G-L090TSDMP1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
