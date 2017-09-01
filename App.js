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
  Results: {screen: Results},
  SelectedDate: {screen: SelectedDate},
});


export default class App extends React.Component {
  render() {
    return (
      <AppNavigations />
    );
  }
}
