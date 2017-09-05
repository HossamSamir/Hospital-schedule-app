import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import Home from './screens/Home'
import About from './screens/About'
import Hospitals from './screens/Hospitals'
import Departments from './screens/Departments'
import SelectedDate from './screens/SelectedDate'
import Results from './screens/Results'
import Profile from './screens/Profile'

const AppNavigations = StackNavigator({
  Home: {screen: Home},
  About: {screen: About},
  Hospitals: {screen: Hospitals},
  Departments: {screen: Departments},
  SelectedDate: {screen: SelectedDate},
  Results: {screen: Results},
  Profile: {screen: Profile},
});


export default class App extends React.Component {
  render() {
    return (
      <AppNavigations />
    );
  }
}
