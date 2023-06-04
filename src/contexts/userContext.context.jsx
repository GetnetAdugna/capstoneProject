import { createContext, useState } from "react";

export const userContext=createContext({
    currentUser:'',
    setCurrentUser:()=>{
        
    }

})

export const userContextProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState({})
    const values={
        currentUser,
        setCurrentUser
    }

    return <userContext.Provider value={values}>
                 {children}
           </userContext.Provider>




}