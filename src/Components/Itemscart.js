import React from 'react';
import {useCart} from "react-use-cart";


const Itemscart=(props,handleClick)=>{
    const {AddItem}=useCart
    return(
        <div className='col=12 col-md-3 col-lg-3 mx-0 md-6'>
            <div class="card p-0 overflow-hidden h-100 shadow">
                <img src={props.img} class="card-img-top img-fluid" />
                <div class="card-body text-center">
                    <h3 class="card-title">{props.title}</h3>
                    <p class="card-title">${props.price}</p>
                    <p class="card-text">{props.desc}</p>
                    <button class="btn btn-success" onClick={()=>AddItem(props.item)}>Add to cart</button>
                </div>
            </div>
        </div>

    )
}

export default Itemscart;