import {
    Box,Button,Flex,FormControl,FormLabel,Heading,Input,InputGroup,Stack,Textarea,
    useColorModeValue,
    VStack,
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
  

const Signup = () => {
const [email,setEmail]=useState("")
const [name,setName]=useState("")
const [password,setPassword]=useState("")

const handlesignup=()=>{
    const payload={
        email,name,password
    }
    console.log(payload)
    axios.post("http://localhost:4000/register",payload)
    .then((res)=>{
        console.log(res)
        alert("sign up successfully!!")
    })
}

  return (
<>
<div>
    <Navbar/>
</div>
      <Flex
        align="center"
        justify="center"
        css={{
          backgroundAttachment: 'fixed',
        }}
        id="contact">
        <Box
          borderRadius="lg"
          m={{ base: 5, md: 16, lg: 10 }}
          p={{ base: 5, lg: 16 }}>
          <Box>
            <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
              <Heading
                fontSize={{
                  base: '4xl',
                  md: '5xl',
                }}>
                Sign up
              </Heading>
  
              <Stack
                spacing={{ base: 4, md: 8, lg: 20 }}
                direction={{ base: 'column', md: 'row' }}>
                <Stack
                  align="center"
                  justify="space-around"
                  direction={{ base: 'row', md: 'column' }}>
                </Stack>
                <Box
                  bg={useColorModeValue('white', 'gray.700')}
                  borderRadius="lg"
                  p={8}
                  color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                  shadow="base">
                  <VStack spacing={5}>
                    <FormControl isRequired>
                      <FormLabel>Name</FormLabel>
  
                      <InputGroup>
                        <Input value={name} onChange={(e)=>setName(e.target.value)} 
                        type="text" name="name" placeholder="Your Name" />
                      </InputGroup>
                    </FormControl>
  
                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>
  
                      <InputGroup>
                        <Input
                          type="email" value={email} onChange={(e)=>setEmail(e.target.value)}
                          name="email"
                          placeholder="Your Email"
                        />
                      </InputGroup>
                    </FormControl>
  
                    <FormControl isRequired>
                      <FormLabel>Password</FormLabel>
  
                      <Textarea value={password} onChange={(e)=>setPassword(e.target.value)}
                        name="password"
                        placeholder="Your Password"
                        rows={1}
                        resize="none"
                      />
                    </FormControl>
  
                    <Button onClick={handlesignup}
                      colorScheme="blue"
                      bg="blue.400"
                      color="white"
                      _hover={{
                        bg: 'blue.500',
                      }}
                      >
                      Sign Up
                    </Button>
                  </VStack>
                </Box>
              </Stack>
            </VStack>
          </Box>
        </Box>
      </Flex>
      </>
    );
  
}

export default Signup