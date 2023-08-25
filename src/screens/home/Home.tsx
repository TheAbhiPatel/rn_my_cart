import React from 'react';
import Box from '../../theme/Box';
import Text from '../../theme/Text';

const Home = () => {
  return (
    <Box
      width={250}
      height={250}
      bg="$primary"
      justifyContent="center"
      alignItems="center">
      <Text color="white">Home</Text>
      <Box
        bg="$secondary"
        width={'90%'}
        height={50}
        borderRadius={'sm'}
        justifyContent="center"
        alignItems="center">
        <Text color="white" fontSize={20}>
          Add to cart
        </Text>
      </Box>
      <Box my="sm"></Box>
      <Box
        bg="$tertiary"
        width={'90%'}
        height={50}
        borderRadius={'sm'}
        justifyContent="center"
        alignItems="center">
        <Text color="white" fontSize={20}>
          Chekout
        </Text>
      </Box>
    </Box>
  );
};

export default Home;
