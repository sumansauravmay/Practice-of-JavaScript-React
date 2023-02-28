import React, { useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { productdel } from '../redux/product/product.action';
// import {addprodcart} from "../redux/cart/cart.action";
import { Button,Select } from '@chakra-ui/react';
import Home from "./Home";
import { Link } from 'react-router-dom';

const Product = () => {
   const [sort,setSort]=useState("asc");
   const [filter,setFilter]=useState("");
const [page,setPage]=useState(1);
    const dispatch=useDispatch();
    const productall=useSelector((store)=>store.products)
// console.log("product",productall)

useEffect(()=>{
    dispatch(productdel(sort,filter,page))
},[sort,filter,page]);


const handlepage=(val)=>{
    setPage(val)
}

  return (
    <div>
        <Home/>

        <Select
          placeholder="filter by category"
          onChange={(e) => setFilter(e.target.value)}
          w="20%"
        >
          <option value={"kids"}>Kids</option>
          <option value={"women"}>Women</option>
          <option value={"men"}>Men</option>

          <option value={"homedecor"}>Homedecor</option>
        </Select>
        <Select
          placeholder="sort by Price"
          onChange={(e) => setSort(e.target.value)}
          w="20%"
        >
          <option value={"asc"}>Low to High</option>
          <option value={"desc"}>High to Low</option>
        </Select>


        {
           productall.product &&  productall.product.map((item)=>(
                <div key={item.id}>
                    
<img style={{margin:"auto"}} src={item.image} alt="image_prod"/>
<h1>Title :{item.title}</h1>
<p>Price :{item.price}</p>
<p>Category :{item.category}</p>
{/* onClick={()=>dispatch(addprodcart(item.id))} */}

<Link to={`/${item.id}`}>
<Button mb="10px">Product details</Button>
</Link>
             </div>
            ))
        }
        <Button onClick={()=>handlepage(page-1)}>Prev</Button>
        <Button>{page}</Button>
        <Button onClick={()=>handlepage(page+1)}>Next</Button>
    </div>
  )
}

export default Product