import React, {useState} from 'react';
import {Button, View} from 'react-native';
import {Image, TextInput, Text} from 'react-native';
import {AsyncStorage} from 'react-native';
import {inputpassword, inputusername} from '../asserts/resource/eng.js';
import {useNavigation} from '@react-navigation/native';
import Styles from '../styles/Styles.js';

const Signin = () => {
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
        <Text>{'\n'}</Text>
        <Button
          title="Sign in"
          color="#FF7F50"
          onPress={() => navigation.push('Home', {text, pass})}
        />
        <Text>{'\n'}</Text>
        <Text style={Styles.warningtext}>Dont't have a account try</Text>
        <Button
          title="Sign Up"
          onPress={() => {
            navigation.push('Signup');
          }}
        />
      </View>
    </View>
  );
};

export default Signin;
