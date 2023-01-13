import React from 'react';
import SignupScreen from './screens/SignupScreen.js';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from './screens/HomeScreen.js';
import TestScreen from './screens/TestScreen.js';
import Signin from './screens/Signin.js';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Home" component={ProfileScreen} />
      <Stack.Screen name="Test" component={TestScreen} />
    </Stack.Navigator>
  );
};
export default Routes;
