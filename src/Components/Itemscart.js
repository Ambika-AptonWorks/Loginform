import React from 'react';
import { useCart } from "react-use-cart";


const Itemscart=(props)=>{
    const{addItem}= useCart();
    
    return(
        <div className='col-6 col-md-3 col-lg-3 mx-0 mb-4'>
            <div className="card p-0 overflow-hidden h-60 shadow">
                <img src={props.img} className="card-img-top img-fluid" />
                <div className="card-body text-center">
                    <h3 className="card-title">{props.title}</h3>
                    <p className="card-title">${props.price}</p>
                    <p className="card-text">{props.desc}</p>
                    <button className="btn btn-success" onClick={() =>addItem(props.item)}> Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Itemscart;