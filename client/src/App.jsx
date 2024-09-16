import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Box, Flex, Heading, Link as ChakraLink } from '@chakra-ui/react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ManageCourses from './pages/ManageCourses';
import Login from './pages/Login';   // Import Login component
import Signup from './pages/Signup'; // Import Signup component



function App() {
  return (
    <Router>
      <Box>
        <Flex as="header" p={4} bg="teal.500" color="white" justifyContent="space-between" alignItems="center">
          <Heading size="lg">UpLearn</Heading>
          <Flex as="nav">
            <ChakraLink as={Link} to="/" px={4}>Home</ChakraLink>
            <ChakraLink as={Link} to="/dashboard" px={4}>Dashboard</ChakraLink>
            <ChakraLink as={Link} to="/login" px={4}>Login</ChakraLink>    {/* Add Login link */}
            <ChakraLink as={Link} to="/signup" px={4}>Signup</ChakraLink>  {/* Add Signup link */}
          </Flex>
        </Flex>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/manage-courses" element={<ManageCourses />} />
          <Route path="/login" element={<Login />} />      {/* Add Login route */}
          <Route path="/signup" element={<Signup />} />    {/* Add Signup route */}
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

