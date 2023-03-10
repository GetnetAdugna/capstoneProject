import firebase from 'firebase/compat/app';
import "firebase/compat/auth"
import "firebase/compat/database"
import { 
    getFirestore,
    doc,
    getDoc,
    setDoc } from "firebase/firestore";

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'






const firebaseConfig = {
  apiKey: "AIzaSyBhtJR6t0vYZnEnu3eeH5EagcmKcTpoWP0",
  authDomain: "capstone-project-db-965de.firebaseapp.com",
  projectId: "capstone-project-db-965de",
  storageBucket: "capstone-project-db-965de.appspot.com",
  messagingSenderId: "898337038550",
  appId: "1:898337038550:web:fac7f25d9f7e4d8a562977"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig); 


// google auth
const provider=new GoogleAuthProvider();
provider.setCustomParameters({
      prompt:"select_account" 
 

})




export const auth=getAuth()
export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);