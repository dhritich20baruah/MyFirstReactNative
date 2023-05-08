/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
// import type {PropsWithChildren} from 'react';
import exStyles from './style';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  return (
    <View style={{backgroundColor: 'cyan'}}>
      <Text style={exStyles.textBox}>Hello React Native</Text>
      <Text style={styles.textBox}>Hello my friend we meet again</Text>
      <Text style={[styles.textBox, exStyles.bg, {margin: 2}]}>Your Name is: {name}</Text>
      <TextInput placeholder="Enter your name" style={styles.inputBox} value={name} onChangeText={(text)=>setName(text)}/>
      <Button title="Press Here"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  textBox: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  inputBox: {
    padding: 2,
    margin: 2,
    backgroundColor: 'white',
    border: 'none',
    fontSize: 20,
  }
});

export default App;
