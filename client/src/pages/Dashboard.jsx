import React from 'react';
import { Box, Heading, Text, Button, Container } from '@chakra-ui/react';

const Dashboard = () => {
  return (
    <Container maxW="container.lg" mt={8}>
      <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md">
        <Heading as="h2" size="xl" mb={4}>Dashboard</Heading>
        <Text fontSize="lg" mb={4}>This is the dashboard page where users can manage their courses and track their progress.</Text>
        <Button colorScheme="teal" size="md">Manage Courses</Button>
      </Box>
    </Container>
  );
};

export default Dashboard;
