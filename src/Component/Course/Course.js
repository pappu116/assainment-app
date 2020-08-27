import React from 'react';
import './Course.css'
import fakeData from '../../fakeData'
import { useState } from 'react';
import Item from '../Item/Item';
import Enroll from '../Enroll/Enroll';
// import CartItem from '../Cart/CartItem';
const Course = () => {
   const frst10Curs =fakeData.slice(0, 10);
   
//    console.log(frst10Curs)
  const  [cours, setCours]=useState(frst10Curs);
  const [enroll,setEnroll]= useState([])
  const handelEnrollCours=(cours) =>{
    //   console.log('Enrolled',cours)
    const NewCours=[...enroll, cours]
    setEnroll(NewCours)
  }
    
    return (
        <div className="Course">
            <div className="course-area">
                {
                    cours.map(crs=> 
                    <Item cours={crs}
                    handelEnrollCours={handelEnrollCours}
                    key={crs.id}
                    >

                    </Item>)
                }
            </div>
            <div  >
           
           <Enroll enroll={enroll}></Enroll>
           <br/>
          
            </div>
        </div>
    );
};

export default Course;