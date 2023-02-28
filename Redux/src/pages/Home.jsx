import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-evenly",fontSize:"25px",fontWeight:"bold"}}>
        <h2>
            <Link to="/">
            Product
            </Link>
            </h2>
        <h2>
            <Link to="/cart">
            Cart
            </Link>
            </h2>

            <h2>
            <Link to="/order">
            Order
            </Link>
            </h2>
        
    </div>
  )
}

export default Home