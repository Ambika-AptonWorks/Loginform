import React from 'react';

const Itemscart=(props)=>{
    return(
        <div className='col=11 col-md-6 col-lg-3 mx-0 mb-6'>
            <div class="card p-0 overflow-hidden h-100 shadow">
                <img src={props.img} class="card-img-top img-fluid"  />
                <div class="card-body">
                    <h3 class="card-title">{props.title}</h3>
                    <p class="card-title">{props.price}</p>
                    <p class="card-text">{props.desc}</p>
                    <button class="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Itemscart;