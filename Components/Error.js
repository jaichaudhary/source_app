import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../Styles';

const Error = ({navigation, route}) => {
  const {result, message} = route.params;
  return (
    <View style={styles.main_background}>
      <Text>{`Result : ${result}`}</Text>
      <Text>{message}</Text>
    </View>
  );
};

export default Error;
