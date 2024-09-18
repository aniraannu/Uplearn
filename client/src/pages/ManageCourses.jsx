import React from 'react';
import { Box, Heading, Text, Container, Link, VStack, Image } from '@chakra-ui/react';
import w3schoolImage from '../../public/image/W3SchoolLogo.png';
import javaImage from '../../public/image/beginwithjavaLogo.png';  // Java logo import
import leetcodeImage from '../../public/image/leetcodeLogo.png';  // LeetCode logo import

const ManageCourses = () => {
  return (
    <Container maxW="container.lg" mt={8}>
      <Box p={4} borderWidth={4} borderRadius="md" boxShadow="md">
        <Heading as="h2" size="xl" mb={4}>Manage Courses</Heading>
        <Text fontSize="lg" mb={5}>Here you can manage your enrolled courses, add new ones, or drop courses.</Text>
      </Box>

      
      <Box bg="blue.800" color="white" mt={8} p={8} borderRadius="md" textAlign="center">
        <VStack spacing={4}>
          <Heading as="h3" size="lg" color="teal.300">Learn JavaScript with W3Schools</Heading>
          <Text fontSize="lg">Click on the image below to start learning JavaScript from W3Schools.</Text>
          
          <Link href="https://www.w3schools.com/js/" isExternal>
            <Image
              src={w3schoolImage}
              alt="W3Schools"
              maxW="100px"
              borderRadius="md"
              _hover={{ opacity: 0.8 }}  // Slight hover effect
            />
          </Link>
        </VStack>
      </Box>

     
      <Box bg="blue.800" color="white" mt={8} p={8} borderRadius="md" textAlign="center">
        <VStack spacing={4}>
          <Heading as="h3" size="lg" color="orange.300">Learn Java with BeginWithJava</Heading>
          <Text fontSize="lg">Click on the image below to start learning Java from BeginWithJava.</Text>

          <Link href="https://www.beginwithjava.com/lander" isExternal>
            <Image
              src={javaImage}
              alt="BeginWithJava"
              maxW="100px"
              borderRadius="md"
              _hover={{ opacity: 0.8 }}  // Slight hover effect
            />
          </Link>
        </VStack>
      </Box>

     
      <Box bg="blue.800" color="white" mt={8} p={8} borderRadius="md" textAlign="center">
        <VStack spacing={4}>
          <Heading as="h3" size="lg" color="yellow.300">Practice Coding with LeetCode</Heading>
          <Text fontSize="lg">Click on the image below to practice coding problems on LeetCode.</Text>

          <Link href="https://leetcode.com/problemset/" isExternal>
            <Image
              src={leetcodeImage}
              alt="LeetCode"
              maxW="100px"
              borderRadius="md"
              _hover={{ opacity: 0.8 }}  // Slight hover effect
            />
          </Link>
        </VStack>
      </Box>

    </Container>
  );
};

export default ManageCourses;


// import React from 'react';
// import { Box, Heading, Text, Container } from '@chakra-ui/react';

// const ManageCourses = () => {
//   return (
//     <Container maxW="container.lg" mt={8}>
//       <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md">
//         <Heading as="h2" size="xl" mb={4}>Manage Courses</Heading>
//         <Text fontSize="lg" mb={4}>Here you can manage your enrolled courses, add new ones, or drop courses.</Text>
//         {/* Add more content or functionality as needed */}
//       </Box>
//     </Container>
//   );
// };

// export default ManageCourses;