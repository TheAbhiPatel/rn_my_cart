import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import theme from './src/theme/light';
import Box from './src/theme/Box';
import Text from './src/theme/Text';
import Home from './src/screens/home/Home';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        flex={1}
        bg="$Background"
        justifyContent="center"
        alignItems="center">
        <Text color="$primary">App</Text>
        <Home />
      </Box>
    </ThemeProvider>
  );
};

export default App;
