import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Button } from '@chakra-ui/react';
import { placeorderdel, removefromcart, updatequantity } from '../redux/cart/cart.action';

const Cart = () => {
  const dispatch=useDispatch();
  const cartalldata=useSelector((store)=>store.cart.cart)
  console.log("cart",cartalldata)

  let totalcartvalue=cartalldata.reduce((a,b)=>{
    return a+b.price*b.quantity
  },0)


  const orderedproduct = (data) => {
    console.log("prod",data);
    dispatch(placeorderdel(data));
   
  };



  return (
    <div>
      <h1>Cart Page</h1>
      {
       cartalldata.map((item)=>(
          <div key={item.id}>
            <img style={{margin:"auto"}} src={item.image} alt="image_cart"/>
            <h1>{item.title}</h1>
            <p>{item.price}</p>
            <Button onClick={()=>dispatch(updatequantity(item.id,item.quantity-1))}>-</Button>
            <Button>{item.quantity}</Button>
            <Button onClick={()=>dispatch(updatequantity(item.id,item.quantity+1))}>+</Button>

            <Button onClick={()=>dispatch(removefromcart(item.id))}>Delete</Button>
          </div>
        ))
      }
      <h1>Total Amount:{totalcartvalue}</h1>
<Button onClick={() => orderedproduct(cartalldata)}>Place Order</Button>
    </div>
  )
}

export default Cart