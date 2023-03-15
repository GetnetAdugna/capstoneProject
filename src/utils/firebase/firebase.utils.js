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
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
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
const new_provider=new GoogleAuthProvider();
new_provider.setCustomParameters({
  
      prompt:"select_account" 
 

})

provider.setCustomParameters({
  
      prompt:"select_account" 
 

})
export const db=getFirestore()

export const createUserDocumentFromAuth=async (userAuth)=>{

}


export const auth=getAuth()
export const signInWithGoogleRedirect=()=>signInWithRedirect(auth,provider);
export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);


export const createAStoreForUsers=async(usersInfo,additonalInfo={})=>{
 
  const dbDoc=await doc(db,'users',usersInfo.uid);
  const docm=await getDoc(dbDoc)

  if (!docm.exists()){
    const {name,email}=usersInfo;
    const createdAt= new Date()

    try {
     
      await setDoc(dbDoc,{
        name,
        email,
        createdAt,
        ...additonalInfo

      })
    } catch (error) {
      console.log(error)
      
    }
  }

       return dbDoc

}

export const createAUserWithEmailAndPassword=async(email,password)=>{
  if (!email || !password) return
  
    return  await createUserWithEmailAndPassword(auth,email,password);
}

export const  UserSignIn=async(email,password)=>{
  if (!email || !password) return 
   return await signInWithEmailAndPassword(auth,email,password);
     
}