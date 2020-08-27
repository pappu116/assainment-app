import React from 'react';
import './CartItem.css'

const CartItem = (props) => {
    const {title,image}=props.item;
    return (
        <div className="item-cart">
           <div>
               <img src={image} alt=""/>
           </div>
           <div>
           <h5>{title}</h5>
           </div>
        </div>
    );
};

export default CartItem;