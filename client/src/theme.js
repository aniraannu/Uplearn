import { extendTheme } from '@chakra-ui/react';


const theme = extendTheme({
  colors: {
    brand: {
      900: '#003d6c',
      800: '#004b8d',
      700: '#0056b3',
    },
  },
  components: {
    Button: {
      variants: {
        solid: {
          bg: 'brand.700',
          color: 'white',
          _hover: {
            bg: 'brand.800',
          },
        },
        outline: {
          borderColor: 'brand.700',
          color: 'brand.700',
          _hover: {
            bg: 'brand.100',
          },
        },
      },
    },
  },
});

export default theme;
