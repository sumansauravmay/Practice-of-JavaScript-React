
import Navbar from '../components/Navbar'
import axios from "axios";
import React, { useEffect, useState } from 'react';
import {
    Box,
    Text
  } from '@chakra-ui/react';

const Bug = () => {

    const [data,setData]=useState([])

    const getData=()=>{
       return axios.get("http://localhost:4000/")
    }
    
    useEffect(()=>{
        getData()
        .then((res)=>{
            console.log(res.data)
    setData(res.data)
        })
    },[])

  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div>
        <Box
                     display="flex"
                     gap={20}
                     mt={10}
                     fontWeight="bolder"
                     color="red.400"
                     justifyContent="center"
                     fontSize={20}
                      >
                            <Text w="100px" h="60px">assignee</Text>

                            <Text w="100px" h="60px">task_type</Text>

                            <Text w="450px" h="100px">description</Text>

                            <Text w="100px" h="60px">status</Text>

                        </Box>
            {
                data
                .filter((item)=>(
    item.task_type==="bug"
))
                .map((item)=>(
                    <Box key={item.id}
                     display="flex"
                     gap={20}
                     mt={10}
                     justifyContent="center"
                      >
                        
                            <Text w="100px" h="60px" fontSize={20} fontWeight="bolder">{item.assignee}</Text>

                            <Text w="100px" h="60px">{item.task_type}</Text>

                            <Text w="450px" h="100px">{item.description}</Text>

                            <Text w="100px" h="60px" cursor={'pointer'}>{item.status}</Text>
                            </Box>
                       
                ))
            }
        </div>
    </div>
  )
}

export default Bug