import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

const Loading = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size="large" color="#FFF" />
      <Text style={{fontSize: 18, color: '#FFF', marginTop: 10}}>
        Loading...
      </Text>
    </View>
  );
};

export default Loading;
