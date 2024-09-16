import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack, Heading, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook
  const toast = useToast(); // Initialize useToast hook

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation to ensure fields are filled in
    if (!email || !password || !confirmPassword) {
      toast({
        title: 'All fields are required.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      toast({
        title: "Passwords don't match!",
        description: 'Please make sure both passwords are identical.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Add signup logic here
    console.log('Signing up:', { email, password });

    // Save the user to localStorage or implement backend logic here
    const newUser = { email, password };
    localStorage.setItem('user', JSON.stringify(newUser));

    // shows a success message or delay navigation
    toast({
      title: 'Sign up successful!',
      description: 'You can now log in with your credentials.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });

    setTimeout(() => {
      // After successful sign-up, navigate to login page
      navigate('/login');
    }, 1000); // Delay for 1 second (optional)
  };

  return (
    <Box
      w="100vw"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="gray.100"
    >
      <Box
        bg="white"
        p={8}
        borderRadius="md"
        boxShadow="lg"
        w={{ base: '90%', md: '400px' }}
      >
        <Heading mb={6} textAlign="center">Sign Up</Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
              />
            </FormControl>

            <Button colorScheme="teal" type="submit" width="full">
              Sign Up
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};

export default Signup;


// import React, { useState } from 'react';

// const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       console.error("Passwords don't match!");
//       return;
//     }
//     // Add signup logic here
//     console.log('Signing up:', { email, password });
//   };

//   return (
//     <div>
//       <h1>Signup</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email:
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </label>
//         <label>
//           Password:
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </label>
//         <label>
//           Confirm Password:
//           <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//         </label>
//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;
