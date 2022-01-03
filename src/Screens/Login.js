import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const userData = {
    username: username,
    password: password,
  };

  const submitLogin = async () => {
    await axios
      .post('https://fakestoreapi.com/auth/login', userData)
      .then(response => {
        console.log(response.data);
        AsyncStorage.setItem('token', JSON.stringify(response.data));
      })
      .catch(error => {
        console.error(error);
        alert(error);
      });
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>

      <View>
        <TextInput
          style={styles.input}
          placeholder="Enter username..."
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter password..."
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          style={styles.signInBtn}
          onPress={() => {
            submitLogin();
          }}>
          <Text style={styles.btnText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00CBD3',
  },
  heading: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  input: {
    backgroundColor: '#FFF',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 30,
    margin: 20,
    padding: 12,
  },
  signInBtn: {
    backgroundColor: '#04F778',
    borderColor: '#000000',
    borderWidth: 1,
    margin: 20,
    padding: 20,
    borderRadius: 32,
    width: 130,
  },
  btnText: {
    fontSize: 17,
    textAlign: 'center',
    color: '#000000',
  },
});
