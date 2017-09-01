import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import Hospitals from './screens/Hospitals'
import Departments from './screens/Departments'
import Date from './screens/Date'
import Results from './screens/Results'

const AppNavigations = StackNavigator({
  Hospitals: {screen: Hospitals},
  Departments: {screen: Departments},
  Date: {screen: Date},
  Results: {screen: Results},
});


export default class App extends React.Component {
  render() {
    return (
      <AppNavigations />
    );
  }
}
