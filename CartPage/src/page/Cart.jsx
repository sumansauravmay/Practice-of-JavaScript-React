import React, { useEffect } from 'react';
import CartItem from './CartItem';

const Cart = () => {
    const [data,setData]=React.useState([]);

const getData=()=>{
    return fetch(`https://wild-puce-dragonfly-belt.cyclic.app/borrowbook`)
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res)
        setData(res)
    })
}
useEffect(()=>{
    getData()
},[])


const totalAmount=data.reduce((preval,currval)=>{
    return preval+(currval.cost*currval.quantity)
},0)


const incQuantity=(id)=>{
const quantityafterupdata=data.map((item)=>item.id===id?{...item,quantity:item.quantity+1}:item)
setData(quantityafterupdata)
}

const decquantity=(id)=>{
    const quantityafterupdata=data.map((item)=>item.id===id?{...item,quantity:item.quantity-1}:item)
setData(quantityafterupdata)
}

  return (
    <div>
        <h1>Cart Item</h1>
        {
            data.map((item)=>(
                <CartItem key={item.id} name2={item.name} img2={item.image_url}
                 price2={item.cost*item.quantity} 
                 quantity2={item.quantity} incquantity2={incQuantity} decquantity2={decquantity} id={item.id}/>
            ))
        }
        <h1>Total:{totalAmount}</h1>
    </div>
  )
}

export default Cart