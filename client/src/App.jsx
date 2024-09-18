import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { Box, Flex, Heading, Link as ChakraLink, Button } from '@chakra-ui/react';
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
        <Flex as="header" p={4} bg="teal.500" color="white" justifyContent="space-between" alignItems="center">
          <Heading size="lg">UpLearn</Heading>
          <Flex as="nav">
            {isAuthenticated ? (
              <>
                <ChakraLink as={Link} to="/" px={4}>Home</ChakraLink>
                <ChakraLink as={Link} to="/dashboard" px={4}>Dashboard</ChakraLink>
                <Button onClick={handleLogout} variant="link" color="white" px={4}>Logout</Button>
              </>
            ) : (
              <>
                <ChakraLink as={Link} to="/login" px={4}>Login</ChakraLink>
                <ChakraLink as={Link} to="/signup" px={4}>Signup</ChakraLink>
              </>
            )}
          </Flex>
        </Flex>
        <Routes>
          <Route path="/" element={<ProtectedRoute element={<Home />} />} />
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



// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import { Box, Flex, Heading, Link as ChakraLink } from '@chakra-ui/react';
// import Home from './pages/Home';
// import Dashboard from './pages/Dashboard';
// import ManageCourses from './pages/ManageCourses';
// import Login from './pages/Login'; // Import the Login page

// function App() {
//   return (
//     <Router>
//       <Box>
//         <Flex as="header" p={4} bg="teal.500" color="white" justifyContent="space-between" alignItems="center">
//           <Heading size="lg">UpLearn</Heading>
//           <Flex as="nav" alignItems="center">
//             <ChakraLink as={Link} to="/" px={4}>Home</ChakraLink>
//             <ChakraLink as={Link} to="/dashboard" px={4}>Dashboard</ChakraLink>
//             <ChakraLink as={Link} to="/login" px={4}>Login</ChakraLink> {/* Added Login link */}
//           </Flex>
//         </Flex>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/manage-courses" element={<ManageCourses />} />
//           <Route path="/login" element={<Login />} /> {/* Added Login route */}
//         </Routes>
//       </Box>
//     </Router>
//   );
// }

// export default App;


// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// // import { Box, Flex, Heading, Link as ChakraLink } from '@chakra-ui/react';
// // import Home from './pages/Home';
// // import Dashboard from './pages/Dashboard';
// // import ManageCourses from './pages/ManageCourses';

// // function App() {
// //   return (
// //     <Router>
// //       <Box>
// //         <Flex as="header" p={4} bg="teal.500" color="white" justifyContent="space-between" alignItems="center">
// //           <Heading size="lg">UpLearn</Heading>
// //           <Flex as="nav">
// //             <ChakraLink as={Link} to="/" px={4}>Home</ChakraLink>
// //             <ChakraLink as={Link} to="/dashboard" px={4}>Dashboard</ChakraLink>
// //           </Flex>
// //         </Flex>
// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //           <Route path="/dashboard" element={<Dashboard />} />
// //           <Route path="/manage-courses" element={<ManageCourses />} />
// //         </Routes>
// //       </Box>
// //     </Router>
// //   );
// // }

// // export default App;

