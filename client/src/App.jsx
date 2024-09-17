import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Box, Flex, Image, Link as ChakraLink } from '@chakra-ui/react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ManageCourses from './pages/ManageCourses';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <Box>
        <Flex
          as="header"
          p={1} 
          bg="white"          
          color="orange.500"  
          alignItems="center"
          borderBottom="1px"  
          borderColor="gray.200" 
          h="60px"             
        >
          <Image
            src="/images/logo.png"  
            alt="UpLearn Logo"
            boxSize="80px"           
            objectFit="contain"      
            borderRadius="full"      
            _hover={{ transform: 'scale(1.1)', transition: 'transform 0.3s ease' }} 
          />

          <Flex
            as="nav"
            ml="auto" 
            alignItems="center"
            gap={3}   
          >
            <ChakraLink
              as={Link}
              to="/"
              px={2} 
              py={1}
              fontSize="sm" 
              borderRadius="md"      
              _hover={{ 
                bg: 'orange.100',    
                color: 'orange.700',  
                textDecoration: 'underline',
                transition: 'all 0.3s ease'
              }}
            >
              Home
            </ChakraLink>
            <ChakraLink
              as={Link}
              to="/dashboard"
              px={2} 
              py={1}
              fontSize="sm" 
              borderRadius="md"      
              _hover={{ 
                bg: 'orange.100',    
                color: 'orange.700',  
                textDecoration: 'underline',
                transition: 'all 0.3s ease'
              }}
            >
              Dashboard
            </ChakraLink>
            <ChakraLink
              as={Link}
              to="/login"
              px={2} 
              py={1}
              fontSize="sm" 
              borderRadius="md"      
              _hover={{ 
                bg: 'orange.100',    
                color: 'orange.700',  
                textDecoration: 'underline',
                transition: 'all 0.3s ease'
              }}
            >
              Login
            </ChakraLink>
            <ChakraLink
              as={Link}
              to="/signup"
              px={2} 
              py={1}
              fontSize="sm" 
              borderRadius="md"      
              _hover={{ 
                bg: 'orange.100',    
                color: 'orange.700',  
                textDecoration: 'underline',
                transition: 'all 0.3s ease'
              }}
            >
              Signup
            </ChakraLink>
          </Flex>
        </Flex>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/manage-courses" element={<ManageCourses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
