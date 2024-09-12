import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

const CourseCard = ({ title, image }) => (
  <Box borderWidth={1} borderRadius="lg" overflow="hidden" p={4}>
    <Image src={image} alt={title} />
    <Text mt={2} fontWeight="bold">{title}</Text>
  </Box>
);

export default CourseCard;
