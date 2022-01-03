import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Menu</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('UserList');
        }}>
        <View style={styles.menuItem}>
          <Text style={styles.menuItemText}>User List Screen</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProductList');
        }}>
        <View style={styles.menuItem}>
          <Text style={styles.menuItemText}>Products List Screen</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  menuItem: {
    backgroundColor: '#00CBD3',
    padding: 15,
    margin: 10,
    borderRadius: 30,
  },
  menuItemText: {
    fontSize: 17,
    color: '#FFF',
  },
});
