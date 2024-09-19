import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { Box, Flex, Heading, Link as ChakraLink, Button, Image } from '@chakra-ui/react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ManageCourses from './pages/ManageCourses';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);  // State to manage authentication

  // Protected route component
  const ProtectedRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Reset authentication status
  };

  return (
    <Router>
      <Box>
        <Flex as="header" p={2} bg="teal.500" color="white" justifyContent="space-between" alignItems="center">
          <Flex alignItems="center">
            <Image src="/image/logo.svg" alt="Logo" boxSize="100px" mr={2} />
            <Heading size="md">Gateway to Education</Heading>
          </Flex>
          <Flex as="nav">
            {isAuthenticated ? (
              <>
                <ChakraLink as={Link} to="/" px={2}>Home</ChakraLink>
                <ChakraLink as={Link} to="/dashboard" px={2}>Dashboard</ChakraLink>
                <Button onClick={handleLogout} variant="link" color="white" px={2}>Logout</Button>
              </>
            ) : (
              <>
                <ChakraLink as={Link} to="/login" px={2}>Login</ChakraLink>
                <ChakraLink as={Link} to="/signup" px={2}>Signup</ChakraLink>
              </>
            )}
          </Flex>
        </Flex>
        
        {/* Routes */}
        <Routes>
          {/* Home is now the default page */}
          <Route path="/" element={<Home />} />  
          <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
          <Route path="/manage-courses" element={<ProtectedRoute element={<ManageCourses />} />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
