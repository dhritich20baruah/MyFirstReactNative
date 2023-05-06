/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';
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
    <View>
      <Text style={{fontSize: 40}}>Hello React Native</Text>
      <Text style={{fontSize: 20}}>Hello my friend we meet again</Text>
      <Button title="Press Here"></Button>
    </View>
  );
};

export default App;
