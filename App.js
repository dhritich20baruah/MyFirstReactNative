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
import CompanyData from './components/CompanyData';

const App = () => {
  const [name, setName] = useState('');

  const handlePress = () => {
    console.warn('HELLO')
  }
  return (
    <View style={{backgroundColor: 'cyan'}}>
      <Text style={exStyles.textBox}>Hello React Native</Text>
      <Text style={styles.textBox}>Hello my friend we meet again</Text>
      <Text style={[styles.textBox, exStyles.bg, {margin: 2}]}>
        Your Name is: {name}
      </Text>
      <TextInput
        placeholder="Enter your name"
        style={styles.inputBox}
        value={name}
        onChangeText={text => setName(text)}
      />
      <Button title="Press Here" color={'red'} onPress={handlePress}/>
      <UserData/>
      <Text>CompanyData:</Text>
      <CompanyData/>
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
    fontSize: 20,
  },
});

const UserData = () => {
  return (
    <View>
      <Text style={{fontSize: 20}}>Name: Dhriti</Text>
      <Text style={{fontSize: 20}}>City: Dibrugarh</Text>
      <Text style={{fontSize: 20}}>Email: dhriti@email.com</Text>

    </View>
  );
};


export default App;
