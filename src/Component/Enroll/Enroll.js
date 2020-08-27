import React from 'react';
import './Enroll.css'
import CartItem from '../Cart/CartItem';
const Enroll = (props) => {
    const enroll = props.enroll;
       
    let price=0;

    for (let i = 0; i < enroll.length; i++) {
        const total = enroll[i];
        price=price+total.price;
        
    }
    const formateNumber = num=>{
        const percision=num.toFixed(2);
        return Number(percision)
    }
    const Commission= price * 0.01
    const grandTotal=(price +Number(Commission)).toFixed(2)
   
    return (
        
            <div className="enroll ">
                <h4><i>Cours Enrolled: {enroll.length}</i></h4>
                <p>Price:$ {formateNumber(price)} </p>
                <p>Commission: $ {formateNumber(Commission)}</p>
                <h3>Total-Price: $ {grandTotal}</h3>
                     
            
           <br/>
            {
             enroll.map(enr=><CartItem item={enr} key={enr.id}></CartItem>)
           }
           </div>
         
    );
};

export default Enroll;