import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/HomeScreen';
import UserList from './src/Screens/UserList';
import SingleUser from './src/Screens/SingleUser';
import ProductList from './src/Screens/ProductList';
import Login from './src/Screens/Login';
import HeaderButton from './src/components/HeaderButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const App = () => {
  // const [isLoggedIn, setLoggedIn] = useState(false);

  // const checkUserToken = async () => {
  //   const userToken = await AsyncStorage.getItem('token');
  //   const token = JSON.parse(userToken);
  //   console.log(token);

  //   if (token) {
  //     setLoggedIn(true);
  //   } else {
  //     setLoggedIn(false);
  //   }
  // };

  // const logout = async () => {
  //   await AsyncStorage.clear();
  //   setLoggedIn(false);
  // };

  // useEffect(() => {
  //   checkUserToken();
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* {isLoggedIn ? ( */}
        {/* <> */}
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerTitle: 'API Demo App',
            headerStyle: {backgroundColor: '#00CBD3'},
            headerTintColor: '#FFF',
            // headerRight: () => <HeaderButton onPress={() => logout()} />,
          }}
        />
        <Stack.Screen
          name="UserList"
          component={UserList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SingleUser"
          component={SingleUser}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={{headerShown: false}}
        />
        {/* </> */}
        {/* ) : ( */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        {/* )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
