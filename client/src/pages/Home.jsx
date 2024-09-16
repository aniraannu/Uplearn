import React from 'react';
import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react';
import CourseCard from '../components/CourseCard'; // Import the CourseCard component
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  // Function to handle exploring courses
  const handleExploreCourses = () => {
    navigate('/courses'); // Navigate to the /courses route
  };

  // Function to handle logging out
  const handleLogout = () => {
    // Clear user data from local storage
    localStorage.removeItem('user');

    // Redirect to login page
    navigate('/login');
  };

  // Check if the user is logged in
  const isLoggedIn = !!localStorage.getItem('user');

  return (
    <Box>
      <Box as="header" bg="brand.900" color="white" py={4}>
        <Container maxW="container.lg" display="flex" justifyContent="space-between" alignItems="center">
          <Heading as="h1">Uplearn</Heading>
          {/* Show the logout button if the user is logged in */}
          {isLoggedIn && (
            <Button colorScheme="red" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Container>
      </Box>
      <Box
        bgGradient="linear(to-r, pink.400, teal.500)"
        color="white"
        textAlign="center"
        py={16}
      >
        <Container maxW="container.md">
          <VStack spacing={4}>
            <Heading as="h2" size="2xl">Welcome to Uplearn</Heading>
            <Text fontSize="xl">Empowering learners with flexible, on-demand education.</Text>
            <Button colorScheme="blue" onClick={handleExploreCourses}>Explore Courses</Button>
          </VStack>
        </Container>
      </Box>
      <Container maxW="container.lg" py={8}>
        <Heading as="h3" size="lg" mb={6}>Our Popular Courses</Heading>
        <VStack spacing={4}>
          <CourseCard title="Course 1" image="/assets/image1.jpg" />
          <CourseCard title="Course 2" image="/assets/image2.jpg" />
          {/* Add more CourseCard components as needed */}
        </VStack>
      </Container>
    </Box>
  );
};

export default Home;


// import React from 'react';
// import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react';
// import CourseCard from '../components/CourseCard'; // Import the CourseCard component
// import { useNavigate } from 'react-router-dom';



// const Home = () => {
//   const navigate = useNavigate();

//   const handleExploreCourses = () => {
//     navigate('/courses'); // Navigate to the /courses route
//   };


//   return (
//     <Box>
//       <Box as="header" bg="brand.900" color="white" py={4}>
//         <Container maxW="container.lg">
//           <Heading as="h1">Uplearn</Heading>
//         </Container>
//       </Box>
//       <Box
//         bgGradient="linear(to-r, blue.400, teal.500)"
//         color="white"
//         textAlign="center"
//         py={16}
//       >
//         <Container maxW="container.md">
//           <VStack spacing={4}>
//             <Heading as="h2" size="2xl">Welcome to Uplearn</Heading>
//             <Text fontSize="xl">Empowering learners with flexible, on-demand education.</Text>
//             <Button colorScheme="blue" onClick = {handleExploreCourses} >Explore Courses</Button>
//           </VStack>
//         </Container>
//       </Box>
//       <Container maxW="container.lg" py={8}>
//         <Heading as="h3" size="lg" mb={6}>Our Popular Courses</Heading>
//         <VStack spacing={4}>
//           <CourseCard title="Course 1" image="/path/to/image1.jpg" />
//           <CourseCard title="Course 2" image="/path/to/image2.jpg" />
          


//           {/* Add more CourseCard components as needed */}

//         </VStack>
//       </Container>
//     </Box>
//   );
// };

// export default Home;
