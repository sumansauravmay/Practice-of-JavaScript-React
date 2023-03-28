
// import React, { useEffect, useState } from 'react';
// import Navbar from '../components/Navbar';
// import '../App.css';
// import axios from 'axios';
// // import { Link, Navigate } from 'react-router-dom';
// import { Box, Text, Button, Modal, ModalOverlay,Flex,
//      ModalContent, ModalHeader, ModalBody, ModalCloseButton,VStack,Select } from '@chakra-ui/react';

// const Home = () => {
//   const [data, setData] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [status,setStatus]=useState("")

//   const handleUpdate = (_id) => {
//     const task = data.find((item) => item._id === _id);
    
//     setSelectedTask(task);
//     setIsModalOpen(true);
//   };

//   const getData = () => {
//     return axios.get('http://localhost:4000/');
//   };

// const handleupdatefunc=(_id)=>{
//     let payload={
//         status
//     }
//     console.log(payload,_id)
//     axios.patch(`http://localhost:4000/update/${_id}`,payload)
//     .then((res)=>{
//         console.log(res.status)
//         alert("Status updated successfully")
//         window.location.reload()
//     })
    
// }



//   useEffect(() => {
//     getData().then((res) => {
//       console.log(res.data);
//       setData(res.data);
//     });
//   }, []);

//   return (
//     <div>
//       <div>
//         <Navbar />
//       </div>
//       <div>
//         <Box
//           display="flex"
//           gap={20}
//           mt={10}
//           fontWeight="bolder"
//           color="red.400"
//           justifyContent="center"
//           fontSize={20}
//         >
//           <Text w="100px" h="60px">
//             assignee
//           </Text>

//           <Text w="100px" h="60px">task_type</Text>

//           <Text w="450px" h="100px">description</Text>

//           <Text w="100px" h="60px">status</Text>
//         </Box>
//         {data.map((item) => (
//           <Box key={item.id} display="flex" gap={20} mt={10} justifyContent="center">
//             <Text w="100px" h="60px" fontSize={20} fontWeight="bolder">
//               {item.assignee}
//             </Text>

//             <Text w="100px" h="60px">{item.task_type}</Text>

//             <Text w="450px" h="100px">{item.description}</Text>

//             <Text w="100px" h="60px" onClick={() => handleUpdate(item._id)} cursor={'pointer'}>
//               {item.status}
//             </Text>
//           </Box>
//         ))}
//         {selectedTask && (
//           <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
//             <ModalOverlay />
//             <ModalContent>
//               <ModalHeader>Update Task</ModalHeader>
//               <ModalCloseButton />
//               <ModalBody>
//                 <Box>

//                 <Flex
//     align="center"
//     justify="center"
//     id="contact">
//     <Box
//       borderRadius="lg"
//       m={{ base: 5, md: 16, lg: 10 }}
//       p={{ base: 5, lg: 16 }}>
//             <Box
           
//               borderRadius="lg"
//               p={8}
//               shadow="base">
//               <VStack spacing={5}>
//                 <Select
//       id="status"
//       name="status"
//       placeholder="Select status"
//       focusBorderColor="brand.400"
//       shadow="sm"
//       size="sm"
//       w="full"
//       rounded="md"
//       value={status} onChange={(e)=>setStatus(e.target.value)}
//       >
//       <option value="To do">To do</option>
//       <option value="In progress">In progress</option>
//       <option value="Done">Done</option>
//     </Select>

//   <Button
//                   colorScheme="blue"
//                   bg="blue.400"
//                   color="white"
//                   _hover={{
//                     bg: 'blue.500',
//                   }} 
//                  onClick={()=>handleupdatefunc(selectedTask._id)}
//                   >
//                  update status
//                 </Button>
//               </VStack>
//             </Box>
         
//       </Box>
//   </Flex>
//                 </Box>
//               </ModalBody>
//             </ModalContent>
//           </Modal>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;






import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import axios from 'axios';
// import { Link, Navigate } from 'react-router-dom';
import { Box, Text, Button, Modal, ModalOverlay,Flex,
     ModalContent, ModalHeader, ModalBody, ModalCloseButton,VStack,Select } from '@chakra-ui/react';

const Home = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [status,setStatus]=useState("")

  const handleUpdate = (_id) => {
    const task = data.find((item) => item._id === _id);
    
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const getData = () => {
    return axios.get('http://localhost:4000/');
  };

const handleupdatefunc=(_id)=>{
    let payload={
        status
    }
    console.log(payload,_id)
    axios.patch(`http://localhost:4000/update/${_id}`,payload)
    .then((res)=>{
        console.log(res.status)
        alert("Status updated successfully")
        window.location.reload()
    })
    
}



  useEffect(() => {
    getData().then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
      <Box 
          display="flex" gap={20} mt={10} ml={20} fontWeight="bolder" justifyContent="start"
          fontSize={20}
        >
<Box boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px">
          <Text w="100px" ml="75px" >Sprints</Text>

          {
          data.map((item)=>(
            <Box key={item._id} ml="5px" h="300px" mt="20px" mb="-20px"
            style={{width:"250px",
            boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"}}>
              <Text ml="25px" w="200px" color="blue">Name:{item.assignee}</Text>
              <Text ml="25px" w="200px" color="green">Type:{item.task_type}</Text>
              <Text ml="25px" w="200px">{item.description}</Text>
              <Button onClick={() => handleUpdate(item._id)} w="200px" color="red.400" mb="-20px">{item.status}</Button>
            </Box>
          ))
        }
          </Box>





<Box>
<Box boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px">
          <Text w="100px" ml="75px" >Bugs</Text>

          {
          data
          .filter((item)=>{
            return item.task_type==="bug"
          })
          .map((item)=>(
            <Box key={item._id} ml="5px" h="300px" mt="20px" mb="-20px"
            style={{width:"250px",
            boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"}}>
              <Text ml="25px" w="200px" color="blue">Name:{item.assignee}</Text>
              <Text ml="25px" w="200px" color="green">Type:{item.task_type}</Text>
              <Text ml="25px" w="200px">{item.description}</Text>
              <Button onClick={() => handleUpdate(item._id)}
              w="200px" color="red.400" mb="-20px">{item.status}</Button>
            </Box>
          ))
        }
          </Box>
</Box>




<Box>
<Box boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px">
          <Text w="100px" ml="75px" >Features</Text>

          {
          data
          .filter((item)=>{
            return item.task_type==="feature"
          })
          .map((item)=>(
            <Box key={item._id} ml="5px" h="300px" mt="20px" mb="-20px"
            style={{width:"250px",
            boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"}}>
              <Text ml="25px" w="200px" color="blue">Name:{item.assignee}</Text>
              <Text ml="25px" w="200px" color="green">Type:{item.task_type}</Text>
              <Text ml="25px" w="200px">{item.description}</Text>
              <Button onClick={() => handleUpdate(item._id)}
               w="200px" color="red.400" mb="-20px">{item.status}</Button>
            </Box>
          ))
        }
          </Box>
</Box>

          
      

<Box>
<Box boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px">
          <Text w="100px" ml="75px" >Story</Text>

          {
          data
          .filter((item)=>{
            return item.task_type==="story"
          })
          .map((item)=>(
            <Box key={item._id} ml="5px" h="300px" mt="20px" mb="-20px"
            style={{width:"250px",
            boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"}}>
              <Text ml="25px" w="200px" color="blue">Name:{item.assignee}</Text>
              <Text ml="25px" w="200px" color="green">Type:{item.task_type}</Text>
              <Text ml="25px" w="200px">{item.description}</Text>
              <Button onClick={() => handleUpdate(item._id)}
              w="200px" color="red.400" mb="-20px">{item.status}</Button>
            </Box>
          ))
        }
          </Box>
</Box>



        {selectedTask && (
           <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
             <ModalOverlay />
             <ModalContent>
               <ModalHeader>Update Task</ModalHeader>
               <ModalCloseButton />
               <ModalBody>
                 <Box>

                 <Flex
     align="center"
    justify="center"
     id="contact">
     <Box
       borderRadius="lg"  
            m={{ base: 5, md: 16, lg: 10 }}
       p={{ base: 5, lg: 16 }}>
            <Box
           
              borderRadius="lg"
              p={8}
               shadow="base">
               <VStack spacing={5}>
                 <Select
       id="status"
       name="status"
       placeholder="Select status"
       focusBorderColor="brand.400"
      shadow="sm"
      size="sm"
      w="full"
      rounded="md"
       value={status} onChange={(e)=>setStatus(e.target.value)}
       >
       <option value="To do">To do</option>
       <option value="In progress">In progress</option>
      <option value="Done">Done</option>
     </Select>

   <Button
                   colorScheme="blue"
                   bg="blue.400"
                   color="white"
                   _hover={{
                    bg: 'blue.500',
                   }} 
                 onClick={()=>handleupdatefunc(selectedTask._id)}
                   >
                  update status
                 </Button>
               </VStack>
             </Box>
         
      </Box>
   </Flex>
                 </Box>
              </ModalBody>
            </ModalContent>
           </Modal>
         )}
        </Box>
        
      </div>
    </div>
  );
};

export default Home;

