/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TextInput,
  Button,
  Alert,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

declare const global: {HermesInternal: null | {}};

const initNumber = () => {
  let number = Math.round(Math.random() * 100);
  return number;
};
const App = () => {
  const [text, setText] = useState<string>('');
  const [number, setNumber] = useState<number>(0);
  console.warn(number);
  const doGuess = () => {
    const textValue = Number(text);
    if (textValue === number) {
      Alert.alert('猜对了');
    } else if (textValue > number) {
      Alert.alert('猜大了');
    } else {
      Alert.alert('猜小了');
    }
  };
  useEffect(() => {
    setNumber(initNumber());
  }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}></TextInput>
        <Button title="猜" onPress={doGuess}></Button>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: 'black',
    margin: 20,
    height: 40,
    fontSize: 20,
  },
});

export default App;
