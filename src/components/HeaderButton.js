import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const HeaderButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btnStyle}>
        <Text style={styles.btnText}>Log Out</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HeaderButton;

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: 'red',
    padding: 10,
  },
  btnText: {
    color: '#FFF',
    fontSize: 17,
    textAlign: 'center',
  },
});
