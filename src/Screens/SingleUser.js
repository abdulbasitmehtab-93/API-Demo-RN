import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import axios from 'axios';

const SingleUser = ({route}) => {
  const [userData, setUserData] = useState({});

  const getData = () => {
    axios
      .get(`https://reqres.in/api/users/${route.params.id}`)
      .then(response => {
        setUserData(response.data.data);
      })
      .catch(error => {
        console.log(error);
        alert(error);
      });
  };

  useEffect(() => {
    // clean up controller
    let isSubscribed = true;
    getData();

    // cancel subscription to useEffect
    return () => (isSubscribed = false);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>User Detail</Text>
      <View style={styles.itemStyle}>
        {userData && (
          <Image
            source={{uri: userData.avatar}}
            resizeMode="contain"
            style={styles.imageStyle}
          />
        )}

        {userData ? (
          <>
            <Text style={styles.itemText}>
              Name: {userData.first_name} {userData.last_name}
            </Text>
            <Text style={styles.itemText}>Email: {userData.email}</Text>
          </>
        ) : null}
      </View>
    </View>
  );
};

export default SingleUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00CBD3',
  },
  heading: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 30,
    marginTop: 20,
    marginBottom: 20,
    padding: 18,
    borderBottomColor: 'purple',
    borderBottomWidth: 2,
  },
  itemStyle: {
    padding: 15,
    alignItems: 'center',
  },
  imageStyle: {width: 128, height: 128, marginTop: 15, marginBottom: 15},
  itemText: {
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
  },
});
