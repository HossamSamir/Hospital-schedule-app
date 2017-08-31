import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  Alert,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import Carousel from 'react-native-looped-carousel';
import DatePicker from 'react-native-datepicker';
import { StackNavigator } from 'react-navigation';

import Results from './screens/Results';
import RootNavigations from './screens/RootNavigations';

const { width, height } = Dimensions.get('window');

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      size: { width, height },
      Hospitals: [{name: 'Hospital #1', id: 1}, {name: 'Hospital #2', id: 2}, {name: 'Hospital #3', id: 3}, {name: 'Hospital #4', id: 4}, {name: 'Hospital #5', id: 5}, {name: 'Hospital #6', id: 6}, {name: 'Hospital #7', id: 7}],
      SelectedHos: '',
      date:"2016-05-15",
      Departments: ['Chest', 'Cardiology', 'Diagnostic imaging', 'General surgery', 'Microbiology', 'Occupational therapy'],
      SelectedDep: '',
    };
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }

  _onPressButton = () => {
    Alert.alert('asf');
    console.log('tapped');
  }

  _Hopitals = () => {
    return this.state.Hospitals.map((Hospital) => (
      <TouchableHighlight
         key={Hospital.id}
         onPress={ () => {this.setState({ SelectedHos: Hospital.name })} }
         style={{
           backgroundColor: Hospital.name == this.state.SelectedHos ? 'white' : '#11284b',
           borderColor: '#11284b',
           borderWidth: 3,
           margin: 10,
           padding: 18,
           borderRadius: 15,
           height: 50,
           alignItems: 'center',
           justifyContent: 'center'
          }}>
        <Text style={{ color: Hospital.name == this.state.SelectedHos ? '#11284b' : 'white', fontWeight: 'bold', fontSize: 15,}}>{ Hospital.name }</Text>
      </TouchableHighlight>
    ))
  }

  _Departments = () => {
    return this.state.Departments.map((Department) => (
      <TouchableHighlight
         onPress={ () => {this.setState({ SelectedDep: Department })} }
         style={{
           backgroundColor: Department == this.state.SelectedDep ? 'white' : '#11284b',
           borderColor: '#11284b',
           borderWidth: 3,
           margin: 10,
           padding: 18,
           borderRadius: 15,
           height: 50,
           alignItems: 'center',
           justifyContent: 'center'
          }}>
        <Text style={{ color: Department == this.state.SelectedDep ? '#11284b' : 'white', fontWeight: 'bold', fontSize: 15,}}>{ Department }</Text>
      </TouchableHighlight>
    ))
  }

  static navigationOptions = {
      header: null
    };


  render() {
    return (
      <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('./assets/img/bg.png')} style={{ width: width, height: height, position: 'absolute' }} />
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%', }}>
            <View style={{ flex: .8, backgroundColor: 'transparent' }}>
              <Image source={require('./assets/img/1.png')} style={{ width: 250, height: 210, resizeMode: 'stretch' }} />
            </View>
            <View style={{ flex: 1, backgroundColor: 'transparent', marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 28, color: '#11284b', fontWeight: 'bold' }}>Choose A Hospital</Text>
              <Text style={{ color: '#11284b', opacity: .8, fontWeight: 'bold' }}>Selected Hospital: {this.state.SelectedHos}</Text>
              <ScrollView horizontal={true} style={{ marginTop: 30, backgroundColor: 'transparent' }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate(
                    'Results',
                    {
                      title: 'asfasf',
                    })}
                >
                  <Text>TAAAAAAAAAAAAP ON ME </Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    );
  }
}


const SimpleApp = StackNavigator({
  App: { screen: App },
  Results: { screen: Results },
});
