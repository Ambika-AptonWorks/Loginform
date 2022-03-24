import React,{useState} from 'react';
import Itemscart from './Itemscart';
import Data from './Data';
import { Navigate } from 'react-router';
import Cart from "./Cart"

const Home = ()=>{
   const [logout,setLogout]=useState(false);
   if (logout){
       return<Navigate to="/"></Navigate>
   }
     return(
         <>
           <h1 className='text-center'>All items</h1>
           <section className='container'>
               <div className='row justify-content-center'>
                    {Data.Productdata.map((item,index) => {
                         return(
                            <Itemscart img={item.img} desc={item.desc} title={item.title}
                            price={item.price} key={index}></Itemscart>
                        );
                     })}
                     <button onClick={()=>setLogout(true)}>Logout</button>
               </div>
           </section>
           
           <Cart />
         </>

     );
}
export default Home;