import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import theme, {palette} from './src/theme/light';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import StackRoutes from './src/routes/StackRoutes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider style={{flex: 1}}>
        <NavigationContainer>
          <SafeAreaView
            style={{
              flex: 1,
              backgroundColor: palette.whiteCream,
            }}>
            <StackRoutes />
          </SafeAreaView>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
