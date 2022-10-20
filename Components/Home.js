import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {TextInput, Button} from 'react-native-paper';
import {
  $img_background_color,
  $primary_color,
  $theme_light_blue,
  styles,
} from '../Styles';

const Home = ({navigation}) => {
  const [numA, setNumA] = useState();
  const [numB, setNumB] = useState();
  const [ans, setAns] = useState(null);
  const [errA, setErrA] = useState(false);
  const [errB, setErrB] = useState(false);

  // console.log('ans', ans);

  const regex = /[^0-9]/;

  const performOp = type => {
    if (type === 'add') {
      setAns(Number(numA) + Number(numB));
    } else if (type === 'subtract') {
      setAns(numA - numB);
    } else if (type === 'divide') {
      setAns(numA / numB);
    } else if (type === 'multiply') {
      setAns(numA * numB);
    }
  };

  const performResult = () => {
    console.log('ans', ans && ans >= 0);
    if (ans && ans >= 0) {
      navigation.navigate('Result', {
        result: ans,
      });
    } else if (ans < 0 && ans) {
      navigation.navigate('Error', {
        result: ans,
        message: 'Secondary amount is less than principal amount',
      });
    } else if (!ans) {
      navigation.navigate('Error', {
        result: ans,
        message: 'Please do any operation on given input',
      });
    }
  };
  return (
    <View style={styles.main_background}>
      <ScrollView contentContainerStyle={styles.scrollview_section}>
        <View style={styles.main_box}>
          <View style={styles.input_section}>
            <TextInput
              mode={'outlined'}
              keyboardType="numeric"
              label="Principle Amount"
              value={numA}
              onChangeText={text => setNumA(text)}
              maxLength={10}
              error={errA}
            />
            <TextInput
              mode={'outlined'}
              keyboardType="numeric"
              label="Secondary Amount"
              value={numB}
              onChangeText={text => setNumB(text)}
              maxLength={10}
              style={styles.mt10}
              error={errB}
            />
          </View>

          <View style={styles.btn_section}>
            <Button
              mode="contained-tonal"
              buttonColor={$primary_color}
              onPress={() => {
                if (!regex.test(numA) && numA && !regex.test(numB) && numB) {
                  performOp('add');
                } else {
                  if (regex.test(numA)) {
                    setErrA(true);
                  }
                  if (regex.test(numB)) {
                    setErrB(true);
                  }
                  if (!numA && numA !== 0) {
                    setErrA(true);
                  }
                  if (!numB && numB !== 0) {
                    setErrB(true);
                  }
                }
              }}>
              Add
            </Button>
            <Button
              mode="contained-tonal"
              buttonColor={$primary_color}
              style={styles.mt10}
              onPress={() => {
                if (!regex.test(numA) && numA && !regex.test(numB) && numB) {
                  performOp('subtract');
                } else {
                  if (regex.test(numA)) {
                    setErrA(true);
                  }
                  if (regex.test(numB)) {
                    setErrB(true);
                  }
                  if (!numA && numA !== 0) {
                    setErrA(true);
                  }
                  if (!numB && numB !== 0) {
                    setErrB(true);
                  }
                }
              }}>
              Subtract
            </Button>
            <Button
              mode="contained-tonal"
              buttonColor={$primary_color}
              style={styles.mt10}
              onPress={() => {
                if (!regex.test(numA) && numA && !regex.test(numB) && numB) {
                  performOp('divide');
                } else {
                  if (regex.test(numA)) {
                    setErrA(true);
                  }
                  if (regex.test(numB)) {
                    setErrB(true);
                  }
                  if (!numA && numA !== 0) {
                    setErrA(true);
                  }
                  if (!numB && numB !== 0) {
                    setErrB(true);
                  }
                }
              }}>
              Divide
            </Button>
            <Button
              mode="contained-tonal"
              buttonColor={$primary_color}
              style={styles.mt10}
              onPress={() => {
                if (!regex.test(numA) && numA && !regex.test(numB) && numB) {
                  performOp('multiply');
                } else {
                  if (regex.test(numA)) {
                    setErrA(true);
                  }
                  if (regex.test(numB)) {
                    setErrB(true);
                  }
                  if (!numA && numA !== 0) {
                    setErrA(true);
                  }
                  if (!numB && numB !== 0) {
                    setErrB(true);
                  }
                }
              }}>
              Mutliply
            </Button>
            <Button
              mode="contained-tonal"
              buttonColor={$img_background_color}
              style={styles.mt10}
              onPress={() => {
                if (!regex.test(numA) && numA && !regex.test(numB) && numB) {
                  performResult();
                } else {
                  setErrA(true);
                  setErrB(true);
                }
              }}>
              Result
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
