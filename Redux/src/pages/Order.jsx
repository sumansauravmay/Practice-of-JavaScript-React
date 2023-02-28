import React from 'react';
import {useSelector } from 'react-redux';
// import { Button } from '@chakra-ui/react';



const Order = () => {
    // const dispatch=useDispatch();
    const orderdel=useSelector((store)=>store.cart.order)
    console.log("order",orderdel)

  return (
    <div>
        <h1>Your Order</h1>
        
             {
              orderdel.map((item)=>(
                 <div key={item.id}>
                   <img style={{margin:"auto"}} src={item.image} alt="image_cart"/>
                   <h1>{item.title}</h1>
                   <p>{item.price}</p>
                 </div>
               ))
             }
        
    </div>
  )
}

export default Order