import React from 'react';
import { Image, Text, Flex } from '@chakra-ui/react';

const CourseCard = ({ title, image }) => {
  return (
    <Flex align="center" justify="flex-start" p={4}>
      
      <Image 
        src={image} 
        alt={title} 
        boxSize="170px" 
        objectFit="" 
        borderRadius="full"  // Makes the image circular
        mr={4} 
      />
     
      <Text fontWeight="bold" fontSize="lg">{title}</Text>
    </Flex>
  );
};

export default CourseCard;
