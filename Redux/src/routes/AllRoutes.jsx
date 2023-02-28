import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../pages/Cart'
import Order from '../pages/Order'
import Product from '../pages/Product'
import Singleproduct from '../pages/Singleproduct'
// import { SingleProduct } from '../redux/product/product.type'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Product/>}></Route>
            <Route path="/:id" element={<Singleproduct/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/order' element={<Order/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes