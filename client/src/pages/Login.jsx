import React, { useState } from 'react';
import { Box, Button, Input, FormControl, FormLabel, Heading, VStack, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasShownToast, setHasShownToast] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset toast state at the beginning of each attempt
    setHasShownToast(false);

    // Retrieve stored user from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    console.log('Stored User:', storedUser); // Debug
    console.log('Entered Credentials:', { email, password }); // Debug

    // Check if user exists and credentials match
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      if (!hasShownToast) {
        setHasShownToast(true);

        toast({
          title: 'Login successful!',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });

        navigate('/dashboard');
      }
    } else {
      if (!hasShownToast) {
        setHasShownToast(true);

        toast({
          title: 'Invalid email or password.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });

        // Reset the hasShownToast state after a delay to allow for new login attempts
        setTimeout(() => {
          setHasShownToast(false);
        }, 3000); // Reset after 3 seconds
      }
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bg="gray.50">
      <Box
        bg="white"
        p={8}
        rounded="lg"
        shadow="lg"
        width={{ base: '90%', md: '400px' }}
      >
        <Heading as="h2" size="lg" mb={6} textAlign="center">
          Login to Learning Account
        </Heading>
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
            <Button colorScheme="teal" width="100%" type="submit">
              Login
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};

export default Login;

// import React, { useState } from 'react';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add authentication logic here
//     console.log('Logging in:', { email, password });
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email:
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </label>
//         <label>
//           Password:
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </label>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
