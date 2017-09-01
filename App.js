import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import Home from './screens/Home'
import Chat from './screens/Chat'
import Three from './screens/Three'
import Results from './screens/Results'

const AppNavigations = StackNavigator({
  Home: {screen: Home},
  Chat: {screen: Chat},
  Three: {screen: Three},
  Results: {screen: Results},
});


export default class App extends React.Component {
  render() {
    return (
      <AppNavigations />
    );
  }
}
