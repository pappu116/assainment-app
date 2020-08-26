import React from 'react';
import './Enroll.css'
const Enroll = (props) => {
    const enroll = props.enroll;
    const{title} = props.enroll
    console.log(title)

   
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
        <div className="enroll">
            <h4><i>Cours Enrolled: {enroll.length}</i></h4>
           <p>Price:$ {formateNumber(price)} </p>
          <p>Commission: $ {formateNumber(Commission)}</p>
          <h3>Total-Price: $ {grandTotal}</h3>
        </div>
    );
};

export default Enroll;