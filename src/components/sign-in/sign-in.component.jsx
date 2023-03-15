import React, { useState } from 'react'
import Button from '../button/button.component'
import FormInput from '../Form-input/formInput.component';
import "./sign-in.styles.scss"

import {

  signInWithGooglePopup,

  createAStoreForUsers,
  UserSignIn
  
} from '../../utils/firebase/firebase.utils.js'


const defautFormValue={
    email:'',
    password:''
}

function SignIn() {
  const [formValues,setfFormValues]=useState(defautFormValue);
  const {email,password}=formValues;

  const handleChange=(event)=>{
   
    try {
    const {name,value}=event.target;
    setfFormValues({...formValues,[name]:value})
    console.log(email)
        
    } catch (error) {
        console.log(error)
        
    }
  
  }
  const restoreDefault=()=>{
    setfFormValues(defautFormValue)
  }

  
  const handlerOnSubmit=async (event)=>{

    event.preventDefault()
      try {
        // after sign in we can store the authenticated user credentials to the global store here

        const response=await UserSignIn(email,password);
        console.log("---------------------------------")
        console.log(response)
       if (response) restoreDefault()
        
      } catch (error) {
        console.log("-")
       
         switch(error.code){
          case "auth/user-not-found":
            alert ("The email does not exist!");
            break
          case "auth/wrong-password":
            alert ("The password you entered is not correct!")
            break
          default:
            console.log(error.code)
        }
        
      }


  }



  const logGoogleUser=async()=>{
    const response=await signInWithGooglePopup();
  
    const result= await createAStoreForUsers(response.user)
    console.log (result)
  }
 
  return (
    <div className='Sign-in-container'>



        <h2>I already have an account</h2>
        <h4>sign in with your email and password</h4>

         <form onSubmit={handlerOnSubmit}>
              
            <FormInput label='Email' onChange={handleChange} type="email" required  name='email' value={email} />
        
            <FormInput label='Password' onChange={handleChange} type='password' required  name='password' value={password} />
            
            <div className='buttons-container'>

                <Button type="submit"> sign In </Button>

                <Button type="button" buttonType='google' onClick={logGoogleUser}>
                    Sign in with google Popup
                </Button>
            


            </div>
          

         </form>




    </div>
  )
}

export default SignIn