import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import Hospitals from './screens/Hospitals'
import Departments from './screens/Departments'
import SelectedDate from './screens/SelectedDate'
import Results from './screens/Results'

const AppNavigations = StackNavigator({
  Hospitals: {screen: Hospitals},
  Departments: {screen: Departments},
  SelectedDate: {screen: SelectedDate},
  Results: {screen: Results},
});


export default class App extends React.Component {
  render() {
    return (
      <AppNavigations />
    );
  }
}
