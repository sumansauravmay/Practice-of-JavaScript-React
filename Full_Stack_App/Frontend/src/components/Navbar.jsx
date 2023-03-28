import React from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Flex,
    Text,
    HStack,
    IconButton,
    // Button,
    useColorModeValue
  } from '@chakra-ui/react';




export default function Navbar() {
    

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
           
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
          
          />
          <HStack spacing={8} alignItems={'center'}>
           
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
             <Text>
             <Link to="/">
                Sprints
                </Link>
                </Text>

             <Text>
             <Link to="/bug">
                Bugs
                </Link>
                </Text>

             <Text>
                 <Link to="/feature">
                 Features
                 </Link>
                 </Text>

             <Text>
             <Link to="/story">
                Story
                </Link>
                </Text>

                <Text>
             <Link to="/newtask">
                Add New Task
                </Link>
                </Text>

                <Text>
                 <Link to="/signup">
                 Signup
                 </Link>
                 </Text>

                 <Text>
                 <Link to="/login">
                Login
                 </Link>
                 </Text>

            </HStack>
          </HStack>
         
        </Flex>

       
      </Box>
    </>
  );
}