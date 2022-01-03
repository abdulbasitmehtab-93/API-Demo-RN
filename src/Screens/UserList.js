import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import Loading from '../components/Loading';

const UserList = ({navigation}) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const getData = async () => {
    await axios
      .get('https://reqres.in/api/users?page=1')
      .then(response => {
        setLoading(false);
        console.log('response --> ', response.data.data);
        setData(response.data.data);
      })
      .catch(error => {
        console.log(error);
        alert(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Users</Text>

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('SingleUser', {id: item.id})}>
              <View style={styles.itemStyle}>
                <Image
                  source={{uri: item.avatar}}
                  resizeMode="contain"
                  style={styles.imageStyle}
                />
                <Text style={styles.itemText}>
                  Name: {item.first_name} {item.last_name}
                </Text>
                <Text style={styles.itemText}>Email: {item.email}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => item.id}
        />
      )}
    </View>
  );
};

export default UserList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00CBD3',
  },
  heading: {
    fontSize: 22,
    color: '#FFF',
    fontWeight: 'bold',
    margin: 15,
    textAlign: 'center',
  },
  itemStyle: {
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 20,
    padding: 15,
    margin: 12,
    alignItems: 'center',
  },
  imageStyle: {width: 130, height: 130, marginTop: 15, marginBottom: 15},
  itemText: {
    color: '#000000',
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
  },
});
