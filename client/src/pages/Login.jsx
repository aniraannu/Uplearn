import React, { useState } from 'react';
import { Box, Button, Input, FormControl, FormLabel, Heading, VStack, useToast, IconButton } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [shownPassword, setShownPassword] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Add your login logic here
      navigate('/dashboard');
    } catch (error) {
      toast({
        title: 'Login Failed',
        description: error.message || 'An error occurred. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      padding={4}
    >
      <Box
        maxW="md"
        borderWidth={1}
        borderRadius="md"
        padding={6}
        boxShadow="md"
        bg="white"
        width="100%"
      >
        <Heading mb={6}>Login</Heading>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type={shownPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            <IconButton
              aria-label={shownPassword ? 'Hide password' : 'Show password'}
              icon={shownPassword ? <ViewOffIcon /> : <ViewIcon />}
              onClick={() => setShownPassword(!shownPassword)}
              position="absolute"
              right={4}
              top={-2}
              size="sm"
            />
          </FormControl>
          <Button
            colorScheme="teal"
            onClick={handleLogin}
            isFullWidth
          >
            Login
          </Button>
        </VStack>
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
