import React from 'react';
import {Text, Button} from 'react-native';
import {AsyncStorage} from 'react-native';
import {SafeAreaView} from 'react-native';
import Styles from '../styles/Styles.js';

const HomeScreen = ({navigation, route}) => {
  return (
    <SafeAreaView>
      <Text style={Styles.heading}>Hi {route.params.text}</Text>
      <Text style={Styles.heading}>Welcome !!!</Text>
      <Button title="Go Back" onPress={() => navigation.pop()} />
      <Button title="Next Screen" onPress={() => navigation.push('Test')} />
    </SafeAreaView>
  );
};

export default HomeScreen;
