
// search by timeout
// filtering,sorting 


import { Input, Select, SelectField } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

function Home() {
    const [sort,setSort]=useState("desc");
    const [data,setDat]=useState([])
    const [filter,setFilter]=useState("")
    const [q,setQ]=useState("")
    useEffect(()=>{
        // sorting
        if(q===""&&filter===""){
            fetch(`https://jsonapimock-node-deployment.onrender.com/books?_sort=cost&_order=${sort}`)
            .then((res)=>res.json()).then((res)=>(setDat(res),console.log("sorting"))).catch((err)=>console.log(err))}
                    
       else if(filter!==""){
        // filtering
            fetch(`https://jsonapimock-node-deployment.onrender.com/books?genre=${filter}`)
            .then((res)=>res.json()).then((res)=>(setDat(res),console.log("filtering"))).catch((err)=>console.log(err))  
        }
        else if(q!==""){
            // debouncing
            const getData=setTimeout(()=>{
                fetch(`https://jsonapimock-node-deployment.onrender.com/books?q=${q}`)
                .then((res)=>res.json()).then((res)=>(setDat(res),console.log("searching"))).catch((err)=>console.log(err))  
            },2000)
            return ()=> clearTimeout(getData)  
        }
         
    },[sort,filter,q])
    const search=(e)=>{
        // if(e.key==="Enter"){
        //     console.log(e.key)
            setQ(e.target.value)
        // }
        
    }
    console.log(data)
  return (
    <div>
        <Select placeholder='sort by cost' w="20%" onChange={(e)=>setSort(e.target.value)}>
        <option value='asc'>Low to hight</option>
  <option value='desc'>Hight to Low</option>
        </Select>
        <Select placeholder='filter by genre' w="20%" onChange={(e)=>setFilter(e.target.value)}>
        <option value='fiction'>fiction</option>
  <option value='Tech'>tech</option>
        </Select>



        <Input placeholder="search here.." onChange={search}/>

        {
            data&&data.map((el)=><h1>{el.cost}---genre--{el.genre}</h1>)
        }
    </div>
  )
}

export default Home