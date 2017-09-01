import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import Hospitals from './screens/Hospitals'
import Departments from './screens/Departments'
import SelectData from './screens/SelectData'
import Results from './screens/Results'

const AppNavigations = StackNavigator({
  SelectData: {screen: SelectData},
  Hospitals: {screen: Hospitals},
  Departments: {screen: Departments},
  Results: {screen: Results},
});


export default class App extends React.Component {
  render() {
    return (
      <AppNavigations />
    );
  }
}
