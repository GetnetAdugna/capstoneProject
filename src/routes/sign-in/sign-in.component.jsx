import React from 'react'
import {signInWithGooglePopup} from '../../utils/firebase/firebase.utils.js'

function SignIn() {
  const logGoogleUser=async()=>{
    const response=await signInWithGooglePopup();
    console.log(response)
  }


  return (
    <div>
      
      <h1>SignIn</h1>
      <button onClick={logGoogleUser}>
        Sign in with google
      </button>



    </div>
  )
}

export default SignIn