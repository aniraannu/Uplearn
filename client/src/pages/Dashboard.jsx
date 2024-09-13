import React from 'react';
import { Box, Heading, Text, Button, Container } from '@chakra-ui/react';
import { useNavigate} from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleManageCourses = () => {
    navigate('/manage-courses'); // Update the route based on your actual route

  };
  return (
    <Container maxW="container.lg" mt={8}>
      <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md">
        <Heading as="h2" size="xl" mb={4}>Dashboard</Heading>
        <Text fontSize="lg" mb={4}>This is the dashboard page where users can manage their courses and track their progress.</Text>
        <Button colorScheme="teal" size="md" onClick= {handleManageCourses}> Manage Courses</Button>
      </Box>
    </Container>
  );
};

export default Dashboard;
