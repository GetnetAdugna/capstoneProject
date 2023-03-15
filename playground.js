import {Firebase} from "firebase/compat/app"
import {
    GoogleAuthProvider,signInWithPopUp,signInWithRedirect,getAuth
} from "firebase/compat/auth"
const firebaseConfig={
  apiKey: "AIzaSyBhtJR6t0vYZnEnu3eeH5EagcmKcTpoWP0",
  authDomain: "capstone-project-db-965de.firebaseapp.com",
  projectId: "capstone-project-db-965de",
  storageBucket: "capstone-project-db-965de.appspot.com",
  messagingSenderId: "898337038550",
  appId: "1:898337038550:web:fac7f25d9f7e4d8a562977"
};
const firebaseApp=Firebase.initalizeApp(firebaseConfig)
const provider= new GoogleAuthProvider()
provider.setCustomParameters({ 
      prompt:"select_account" 
 })
const auth =getAuth()
export default function getGoogleAuthProvider(){
    return signInWithPopUp(auth,provider)
}