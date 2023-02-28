import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {addprodcart} from "../redux/cart/cart.action"
import { productdetail } from "../redux/product/product.action";

function Singleproduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleprod = useSelector((data) => data.products.singleprod);
  console.log(singleprod)

//   const { cart } = useSelector((data) => data.cart);
//   function checkalready(id) {
//     for (let i = 0; i < cart.length; i++) {
//       if (cart[i].id === id) {
//         return true;
//       }
//       return false;
//     }
//   }
  
//   console.log(id);
  useEffect(() => {
    dispatch(productdetail(id));
  }, []);
  return (
    <Box  w="50%" border={"1px solid gray"} p="10px" m={"auto"} mt="10px">
      <Image src={singleprod.image} alt="" w="20%" m={"auto"} />
      <Heading>Title:{singleprod.title}</Heading>
      <Text>Brand:{singleprod.brand}</Text>
      <Text>Price:{singleprod.price}</Text>
      <Text>Category:{singleprod.category}</Text>
      <Button
    onClick={()=>dispatch(addprodcart(singleprod.id))}
        // disabled={checkalready(product.id)}
      >
        Add to Cart
      </Button>
    </Box>
  );
}

export default Singleproduct;