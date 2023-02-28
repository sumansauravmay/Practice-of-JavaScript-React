
import {ADDTOCART, PLACEORDER, REMOVEITEM, UPDATEQUANTITY} from "./cart.type";
const initialState={
  cart:[],
  order:[]
}
export const cartreducer=(state=initialState,{type,payload})=>{
switch(type){
  case ADDTOCART:{
    return{
      cart:[...state.cart,payload]
    }
  }
  case UPDATEQUANTITY:{
    const update=state.cart.map((item)=>{
      if(item.id===payload.id)
      {
        return {
          ...item,
          ...payload
        }
      }
      return item
    })
    return {
      cart:update
    }
  }
  case REMOVEITEM:{
    let updatedprod=state.cart.filter((item)=>item.id!==payload)
    return {
      cart:updatedprod
    }
  }

case PLACEORDER:{
  return {
    ...state,
    order:payload,
    cart:[]
    
  }
}

  default:{
    return state
  }
}
}

