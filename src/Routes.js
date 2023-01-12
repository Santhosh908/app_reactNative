import React from 'react';
import SignupScreen from './screens/SignupScreen.js';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from './screens/HomeScreen.js';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Home" component={ProfileScreen} />
    </Stack.Navigator>
  );
};
export default Routes;
