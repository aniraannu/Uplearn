import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Box, Flex, Heading, Link as ChakraLink } from '@chakra-ui/react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Box>
        <Flex as="header" p={4} bg="teal.500" color="white" justifyContent="space-between" alignItems="center">
          <Heading size="lg">UpLearn</Heading>
          <Flex as="nav">
            <ChakraLink as={Link} to="/" px={4}>Home</ChakraLink>
            <ChakraLink as={Link} to="/dashboard" px={4}>Dashboard</ChakraLink>
          </Flex>
        </Flex>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;

