import React from 'react';
import Login from './Login';
import Parent from "./Components/Parent";
import {Link, Routes, Route } from "react-router-dom" 


function App(){
     return(
         <>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="Parent" element={<Parent />}></Route>
            </Routes>
         </>  
     )
}
export default App