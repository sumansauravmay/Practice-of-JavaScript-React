import React, { useEffect, useState } from 'react'
import Pagination from './Pagination';

const Product = () => {
    const [data,setData]=React.useState([]);
    const [page,setPage]=React.useState(1);
    const [searchitem,setSearchitem]=useState("")
    const [sortby,setSortby] = useState("asc");
    const [filter,setFilter]=useState("")

const getData=(page=1,sortby="asc")=>{
    if(filter!="")
    {
        return fetch(`https://wild-puce-dragonfly-belt.cyclic.app/bookdata?_limit=3&_page=${page}&_sort=cost&_order=${sortby}&genre=${filter}`)
        .then((res)=>res.json())
        .then((res)=>{
            // console.log(res)
            setData(res)
        })
    }
       else{
        return fetch(`https://wild-puce-dragonfly-belt.cyclic.app/bookdata?_limit=3&_page=${page}&_sort=cost&_order=${sortby}`)
        .then((res)=>res.json())
        .then((res)=>{
            // console.log(res)
            setData(res)
        })
       }
    }

useEffect(()=>{
    getData(page,sortby,filter)
},[page,sortby,filter])




const handleChangepage=(val)=>{
const value=page+val;
setPage(value)
}

  return (
    <div>
        {/* search part */}

        <input style={{margin:"10px",padding:"5px"}}
         onChange={(e)=>setSearchitem(e.target.value)}
         type="search" placeholder='Serach by book name'/>

        {/* filter genre using select tag */}

         <select name="" id="" style={{padding:"5px",margin:"5px"}} onChange={(e)=>setFilter(e.target.value)}>
            <option value="">All</option>
            <option value="fiction">Fiction</option>
            <option value="Bussiness">Bussiness</option>
            <option value="story">Story</option>
            <option value="Study">Study</option>
         </select>

         {/* sort by cost */}

         <button style={{padding:"5px",margin:"5px"}} onClick={()=>setSortby("asc")}>Ascending</button>
         <button style={{padding:"5px",margin:"5px"}} onClick={()=>setSortby("desc")}>Descending</button>
        {
            data
            // search append
            .filter((item)=>{
                if(searchitem==="All")
                {
                    return item;
                }else if(item.book_name.toLowerCase().includes(searchitem.toLowerCase()))
                {
                    return item;
                }
            })
            .map((item)=>(
                <div key={item.id}>
                <img src={item.image_url} alt="pic"/>
                <h1>Name : {item.book_name}</h1>
                <p>Author:{item.author}</p>
                <p>Author:{item.genre}</p>
                <p>₹ {item.cost}</p>
                </div>
            ))
        }
        <Pagination current={page} onChange={handleChangepage}/>
    </div>
  )
}

export default Product;
