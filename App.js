import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Components/Home';
import Result from './Components/Result';
import Error from './Components/Error';
import {styles} from './Styles';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Result"
        component={Result}
        options={({navigation}) => ({
          headerTitle: '',
          headerLeft: () => (
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.reset({
                    index: 0,
                    routes: [{name: 'Home'}],
                  });
                }}
                style={[styles.align_row]}>
                <Image
                  style={{
                    height: 12,
                    width: 10,
                    resizeMode: 'contain',
                    marginLeft: 17,
                  }}
                  source={require('./Images/backArrow.png')}
                />
                <Text style={[{marginLeft: 15, fontSize: 16}]}>Result</Text>
              </TouchableOpacity>
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="Error"
        component={Error}
        options={({navigation}) => ({
          headerTitle: '',
          headerLeft: () => (
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.reset({
                    index: 0,
                    routes: [{name: 'Home'}],
                  });
                }}
                style={[styles.align_row]}>
                <Image
                  style={{
                    height: 12,
                    width: 10,
                    resizeMode: 'contain',
                    marginLeft: 17,
                  }}
                  source={require('./Images/backArrow.png')}
                />
                <Text style={[{marginLeft: 15, fontSize: 16}]}>Error</Text>
              </TouchableOpacity>
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default App;
