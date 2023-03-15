import { useState } from "react"
import { createAUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { createAStoreForUsers } from "../../utils/firebase/firebase.utils";
import FormInput from "../Form-input/formInput.component";
import "./sign-up.styles.scss"
import Button from "../button/button.component"
const formDefaultValues={
    name:'',
    email:'',
    password:'',
    confirmPassword:''
} 
function SignUp() {

   const [formValues,setFromValues]=useState(formDefaultValues)

   const {name,email,password,confirmPassword}=formValues;
  

const handleChange=(event)=>{
    try {
          const {name,value}=event.target;
          setFromValues({...formValues,[name]:value})
        
    } catch (error) {
        console.error(error)
        
    }

   }
   const resetFormFields=()=>{
    setFromValues(formDefaultValues)
   }

   const handleOnSubmit=async(event)=>{
    event.preventDefault()
    
     
        if (password!==confirmPassword){
            alert("passwords do not match ,Please add a matching password!");
            return

        }
        try{
          
            const result=await createAUserWithEmailAndPassword(email,password);
            const createdValue= await createAStoreForUsers(result.user,{name});
            resetFormFields()
           
        }catch(err){
            console.log(err)

        }


   }

  return (
    <div className="Sign-up-container">
        <h2>Don't have an account?</h2>

        <form onSubmit={handleOnSubmit}>


        
            <FormInput label='Name' onChange={handleChange} type="text" required name="name" value={name}/>
        
            <FormInput label='Email' onChange={handleChange} type="email" required  name='email' value={email} />
        
            <FormInput label='Password' onChange={handleChange} type='password' required  name='password' value={password} />

            
            <FormInput  label='Confirm password' onChange={handleChange} type='password'  required name="confirmPassword" value={confirmPassword}/>

             
         <Button type="submit"> sign up </Button>
        </form>



    </div>
  )
}

export default SignUp