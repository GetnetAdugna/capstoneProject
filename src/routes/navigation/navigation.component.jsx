import React, { Fragment } from 'react'
import { Outlet,Link } from 'react-router-dom'
import "./navigation.style.scss"
import {ReactComponent as Logo} from "../../assets/images/shopping-logo.svg"
function Navigation() {
  return (
  
  <Fragment>
            <div className='navigation'>
               
                   <Link className='logo-container' to={"/"} >
                      
                          <Logo className='logo'/>
                     
                      
                      
                   </Link> 
                   
              

                <div className='nav-links-container'>
                    <Link  to={"/shop"} className='nav-link'>
                    Shoes
                    </Link>
                     <Link  to={"/jacket"} className='nav-link'>
                    jacket
                    </Link>
                     <Link  to={"/signIn"} className='nav-link'>
                    Sign In
                    </Link>

                </div>
            
          

          
            </div>
{/* this is the outlet where all the nested routes are 
going to be displayed next to it
  */}
            <Outlet/>
  
    </Fragment>
    
    )
}

export default Navigation
