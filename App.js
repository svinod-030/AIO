/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar, Text } from 'react-native';
import Header from './src/components/header/Header';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Navigator} from './src/components/navigator/AppNavigator';

const App: () => React$Node = () => {
  return (
      <SafeAreaProvider>
          <Header/>
          <Navigator/>
          <StatusBar style="dark"/>
      </SafeAreaProvider>
  );
};

export default App;
