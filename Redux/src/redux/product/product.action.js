
import {PRODUCTDETAILS, SingleProduct} from "./product.type";
export const productdel=(sort="asc",filter="",page=1)=>(dispatch)=>{
    fetch(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?sort=price&order=${sort}&filter=${filter}&page=${page}&limit=5`
    )
    .then((res)=>res.json())
    .then((res)=>{
        dispatch({type:PRODUCTDETAILS,payload:res.data})
        // console.log("data",res.data)
        
    })
}
export const productdetail = (id) => (dispatch) => {
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: SingleProduct, payload: res.data })
        console.log(res.data)
      })
     
  };



  