import React from 'react';
import 'react-native-gesture-handler';
import { ThemeProvider } from 'react-native-elements';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './src/views/homePage/HomePage';
import TransportMap from './src/views/transportMap/TransportMap';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen options={{headerShown: false}} name="HomePage" component={HomePage} />
        <Stack.Screen name="TransportMap" component={TransportMap} />
      </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;