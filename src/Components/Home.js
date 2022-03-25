import React from 'react';
import Itemscart from './Itemscart';
import Data from './Data';

const Home = ()=>{
     return(
         <>
           <h1 className='text-center'>All items</h1>
           <section className='py-4 container'>
               <div className='row justify-content-center'>
                    {Data.Productdata.map((item,index) => {
                         return(
                            <Itemscart img={item.img} desc={item.desc} title={item.title}
                            price={item.price} key={index}
                            item={item}></Itemscart>
                        );
                     })}
               </div>
           </section>
         </>

     );
}
export default Home;