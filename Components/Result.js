import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../Styles';

const Result = ({navigation, route}) => {
  const {result, message} = route.params;
  return (
    <View style={styles.main_background}>
      <Text>Success</Text>
      <Text>{`Result : ${result}`}</Text>
    </View>
  );
};

export default Result;
