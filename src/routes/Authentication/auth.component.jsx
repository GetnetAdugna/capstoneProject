import React from 'react'

import SignUp from '../../components/sign-up/signup.component.jsx';
import SignInComponent from '../../components/sign-in/sign-in.component.jsx';

import "./auth.styles.scss"



function Auth() {

  return (
    <div className='authentication-container'>
      <SignInComponent/>
      <SignUp/>
     
    </div>
  )
} 

export default Auth