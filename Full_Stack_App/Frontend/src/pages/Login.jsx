import {
    Box,Button,Flex,FormControl,FormLabel,Heading,Input,InputGroup,Stack,Textarea,
    useColorModeValue,
    VStack,
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';

const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

const handlelogin=()=>{
    const payload={
        email,password
    }
    axios.post("http://localhost:4000/login",payload)
    .then((res)=>{
        console.log(res.data.msg)
        localStorage.setItem("username",JSON.stringify(res.data.token))
        alert("Login Successfully!!")
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
                Log In
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
  
                    <Button 
                    onClick={handlelogin}
                      colorScheme="blue"
                      bg="blue.400"
                      color="white"
                      _hover={{
                        bg: 'blue.500',
                      }}
                    >
                      Log in
                    </Button>
                  </VStack>
                </Box>
              </Stack>
            </VStack>
          </Box>
        </Box>
      </Flex>
      </>
  )
}

export default Login;