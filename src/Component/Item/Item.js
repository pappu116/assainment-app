import React from 'react';
import './Item.css'

const Item = (props) => {
   const{title,discription,price,image,mentor}=props.cours;
   const handelEnrollCours=props.handelEnrollCours;
    return (
        <div className="item">
            <div>
                <img src={image} alt=""/>
            </div>
            <div className="title-name">
            <h4>{title}</h4>
            <p><b>mentor: {mentor}</b></p>
            <p>{discription}</p>
            <h5>Price: $ {price}</h5>
            <br/>
            <button className="enrl-btn" onClick={()=>handelEnrollCours(props.cours)}>Enroll Now</button>
            </div>
        </div>
    );
};

export default Item;