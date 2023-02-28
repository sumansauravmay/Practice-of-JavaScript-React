
import {ADDTOCART, PLACEORDER, REMOVEITEM, UPDATEQUANTITY} from "./cart.type";

export const addprodcart=(id)=>(dispatch)=>{
  fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`)
  .then((res)=>res.json())
  .then((res)=>{
    dispatch({type:ADDTOCART,payload:{...res.data,quantity:1}})
    // console.log("cartaction",res.data)
    alert("Product added successfully")
  })
}

export const updatequantity=(id,update)=>(dispatch)=>{
  fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`)
  .then((res)=>res.json())
  .then((res)=>{
    dispatch({
      type:UPDATEQUANTITY,
      payload:{...res.data,quantity:update}
    })
    
  })
}

export const removefromcart=(id)=>(dispatch)=>{
dispatch({type:REMOVEITEM,payload:id})
}

export const placeorderdel=(data)=>(dispatch)=>{
  dispatch({type:PLACEORDER,payload:data})
  console.log("data",data)
}
