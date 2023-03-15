import React from 'react'
import './App.css';
import Home from "./routes/home/home.component"
import {Routes ,Route} from "react-router-dom"
import Navigation  from './routes/navigation/navigation.component';
import Auth  from './routes/Authentication/auth.component';

function Shop() {
  return (
    <div>Shop</div>
  )
}

function App() {

 return (
  <Routes>

      <Route path='/' element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path='shop' element={<Shop/ >}/>

          <Route path='signIn' element={<Auth/ >}/>
          
      </Route>

  </Routes>

 );

}
  
export default App;
