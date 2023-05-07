/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';
import exStyles from './style'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

const App = () => {
  return (
    <View style={{backgroundColor: 'cyan'}}>
      <Text style={exStyles.textBox}>Hello React Native</Text>
      <Text style={styles.textBox}>Hello my friend we meet again</Text>
      <Text style={[styles.textBox, exStyles.bg, {margin: 2}]}>Hello my friend we meet again</Text>

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
});

export default App;
