import { PRODUCTDETAILS,SingleProduct } from "./product.type"


const initialState={
    product:[],
    singleprod:{}
}

export const productreducer=(state=initialState,{type,payload})=>{
    switch(type){
        case PRODUCTDETAILS:{
            return {
                ...state,
                product:payload
            }
        }
        case SingleProduct:{
            return {
                ...state,
                singleprod:payload
            }
        }
default:{
    return state
}
    }
}
