import React from 'react';
import { StackNavigator } from 'react-navigation';
import Results from './Results';


const RootStackNavigator = StackNavigator(
  {
    Results: {
      screen: Results,
    },
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
);

export default class RootNavigator extends React.Component {

  render() {
    return <RootStackNavigator />;
  }
}
