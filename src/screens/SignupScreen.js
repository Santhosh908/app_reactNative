import React, {useState} from 'react';
import {Button, View} from 'react-native';
import {Image, TextInput, Text} from 'react-native';
import {AsyncStorage} from 'react-native';
import {inputpassword, inputusername} from '../asserts/resource/eng.js';
import {useNavigation} from '@react-navigation/native';
import Styles from '../styles/Styles.js';

const SignupScreen = () => {
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const [pass, setPass] = useState('');
  const [repass, setRePass] = useState('');
  function check() {
    if (repass === pass && pass != null && repass != null) {
      console.log('Same');
    }
  }
  AsyncStorage.setItem('username', text);
  AsyncStorage.getItem('username', (err, result) => {
    if (err) {
      throw err;
    }
  });
  AsyncStorage.setItem('password', pass);
  AsyncStorage.getItem('username', (err, result) => {
    if (err) {
      throw err;
    }
  });
  return (
    <View>
      <View style={Styles.topview}>
        <Image
          style={Styles.logo}
          source={require('../asserts/images/logo.jpg')}
        />
      </View>
      <View style={Styles.middle}>
        <Text style={Styles.text}>Username:</Text>
        <TextInput
          style={Styles.input}
          onChangeText={newText => setText(newText)}
          placeholderTextColor="#999"
          placeholder={inputusername}
        />
        <Text style={Styles.text}>Enter the password:</Text>
        <TextInput
          secureTextEntry={true}
          style={Styles.input}
          placeholder={inputpassword}
          placeholderTextColor="#999"
          onChangeText={newPass => setPass(newPass)}
        />
        <Text style={Styles.text}>Retype the password:</Text>
        <TextInput
          secureTextEntry={true}
          style={Styles.input}
          placeholder={inputpassword}
          placeholderTextColor="#999"
          onChangeText={newPass => setRePass(newPass)}
        />
        <Text>{'\n'}</Text>
        <Button
          title="Submit"
          color="#FF7F50"
          onPress={() => navigation.push('Home', {text, pass})}
        />
      </View>
    </View>
  );
};
export default SignupScreen;
