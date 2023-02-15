import React from 'react'

const CartItem = ({img2,name2,price2,id,quantity2,incquantity2,decquantity2}) => {
  return (
    <div>
        <img src={img2} alt="prod_pic"/>
        <h3>{name2}</h3>
        <h3>{price2}</h3>
        
        <button onClick={()=>decquantity2(id)}>-</button>
        <button>{quantity2}</button>
        <button onClick={()=>incquantity2(id)}>+</button>
    </div>
  )
}

export default CartItem