import React from 'react';
import { Box, Heading, Text, Container } from '@chakra-ui/react';

const ManageCourses = () => {
  return (
    <Container maxW="container.lg" mt={8}>
      <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md">
        <Heading as="h2" size="xl" mb={4}>Manage Courses</Heading>
        <Text fontSize="lg" mb={4}>Here you can manage your enrolled courses, add new ones, or drop courses.</Text>
        {/* Add more content or functionality as needed */}
      </Box>
    </Container>
  );
};

export default ManageCourses;
