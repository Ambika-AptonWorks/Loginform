import React from 'react';
import Home from './Components/Home';
import Login from './Login';
import {Link, Routes, Route} from "react-router-dom"


function App(){
     return(
         <>
         <Routes>
             <Route path="/" element={<Login />}></Route>
             <Route path="Home" element={<Home />}></Route>
         </Routes> 
         </>  
     )
}
export default App