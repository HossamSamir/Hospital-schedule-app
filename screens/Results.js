import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
  Button,
  Image,
  TouchableOpacity,
  Dimensions,
 } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import Timeline from 'react-native-timeline-listview';

// <Text>
//   Selected Hospital:
//     1.name => {this.props.navigation.state.params.Hospital.name + "\n"}
//     2. ID => {this.props.navigation.state.params.Hospital.id + "\n\n"}
//   Selected Department:
//     1. name => {this.props.navigation.state.params.Department.name + "\n"}
//     1. ID => {this.props.navigation.state.params.Department.id + "\n\n"}
//   Selected Date: {this.props.navigation.state.params.Date}
// </Text>
const { width, height } = Dimensions.get('window');

export default class Results extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      size: { width, height },
      Hospitals: [{name: 'Hospital #1', id: 1}, {name: 'Hospital #2', id: 2}, {name: 'Hospital #3', id: 3}, {name: 'Hospital #4', id: 4}, {name: 'Hospital #5', id: 5}, {name: 'Hospital #6', id: 6}, {name: 'Hospital #7', id: 7}],
      SelectedHos: '',
      date:"2016-05-15",
      Departments: ['Chest', 'Cardiology', 'Diagnostic imaging', 'General surgery', 'Microbiology', 'Occupational therapy'],
      SelectedDep: '',
      data: [

        // Doctor
        {
          time: '09:00',
          title: (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Profile', {})
              }}
              style={{ flex: 1, width, height: 50, flexDirection: 'row'}}>
              <View style={{ flex: 1 }}>
                <Text style={{backgroundColor: 'transparent', fontWeight: 'bold', fontSize: 15}}>Doctor #1</Text>
                <Text style={{backgroundColor: 'transparent', fontSize: 14}}>+0123456789</Text>
              </View>
              <View style={{flex: 1,}}>
                <Image source={require('../assets/img/go.png')} style={{ width: 50, height: 50,}} />
              </View>
            </TouchableOpacity>
          ),
        },

        // Doctor
        {
          time: '09:00',
          title: (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Profile', {})
              }}
              style={{ flex: 1, width, height: 50, flexDirection: 'row'}}>
              <View style={{ flex: 1 }}>
                <Text style={{backgroundColor: 'transparent', fontWeight: 'bold', fontSize: 15}}>Doctor #1</Text>
                <Text style={{backgroundColor: 'transparent', fontSize: 14}}>+0123456789</Text>
              </View>
              <View style={{flex: 1,}}>
                <Image source={require('../assets/img/go.png')} style={{ width: 50, height: 50,}} />
              </View>
            </TouchableOpacity>
          ),
        },

        // Doctor
        {
          time: '09:00',
          title: (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Profile', {})
              }}
              style={{ flex: 1, width, height: 50, flexDirection: 'row'}}>
              <View style={{ flex: 1 }}>
                <Text style={{backgroundColor: 'transparent', fontWeight: 'bold', fontSize: 15}}>Doctor #1</Text>
                <Text style={{backgroundColor: 'transparent', fontSize: 14}}>+0123456789</Text>
              </View>
              <View style={{flex: 1,}}>
                <Image source={require('../assets/img/go.png')} style={{ width: 50, height: 50,}} />
              </View>
            </TouchableOpacity>
          ),
        },

        // Doctor
        {
          time: '09:00',
          title: (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Profile', {})
              }}
              style={{ flex: 1, width, height: 50, flexDirection: 'row'}}>
              <View style={{ flex: 1 }}>
                <Text style={{backgroundColor: 'transparent', fontWeight: 'bold', fontSize: 15}}>Doctor #1</Text>
                <Text style={{backgroundColor: 'transparent', fontSize: 14}}>+0123456789</Text>
              </View>
              <View style={{flex: 1,}}>
                <Image source={require('../assets/img/go.png')} style={{ width: 50, height: 50,}} />
              </View>
            </TouchableOpacity>
          ),
        },

        // Doctor
        {
          time: '09:00',
          title: (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Profile', {})
              }}
              style={{ flex: 1, width, height: 50, flexDirection: 'row'}}>
              <View style={{ flex: 1 }}>
                <Text style={{backgroundColor: 'transparent', fontWeight: 'bold', fontSize: 15}}>Doctor #1</Text>
                <Text style={{backgroundColor: 'transparent', fontSize: 14}}>+0123456789</Text>
              </View>
              <View style={{flex: 1,}}>
                <Image source={require('../assets/img/go.png')} style={{ width: 50, height: 50,}} />
              </View>
            </TouchableOpacity>
          ),
        },

        // Doctor
        {
          time: '09:00',
          title: (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Profile', {})
              }}
              style={{ flex: 1, width, height: 50, flexDirection: 'row'}}>
              <View style={{ flex: 1 }}>
                <Text style={{backgroundColor: 'transparent', fontWeight: 'bold', fontSize: 15}}>Doctor #1</Text>
                <Text style={{backgroundColor: 'transparent', fontSize: 14}}>+0123456789</Text>
              </View>
              <View style={{flex: 1,}}>
                <Image source={require('../assets/img/go.png')} style={{ width: 50, height: 50,}} />
              </View>
            </TouchableOpacity>
          ),
        },

        // Doctor
        {
          time: '09:00',
          title: (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Profile', {})
              }}
              style={{ flex: 1, width, height: 50, flexDirection: 'row'}}>
              <View style={{ flex: 1 }}>
                <Text style={{backgroundColor: 'transparent', fontWeight: 'bold', fontSize: 15}}>Doctor #1</Text>
                <Text style={{backgroundColor: 'transparent', fontSize: 14}}>+0123456789</Text>
              </View>
              <View style={{flex: 1,}}>
                <Image source={require('../assets/img/go.png')} style={{ width: 50, height: 50,}} />
              </View>
            </TouchableOpacity>
          ),
        },

      ]
    };
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }

  static navigationOptions = {
    header: null
  };


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, }} onLayout={this._onLayoutDidChange}>
        <Image source={require('../assets/img/bg-icons.png')} style={{ width: width, height: height, position: 'absolute' }} />

      <View style={{ }}>
        <Image source={require('../assets/img/results.png')} style={{ width, height: 200, position: 'absolute'}} />
        <View style={{ backgroundColor: 'transparent', width, marginTop: 30, marginLeft: 30, height: 180 }}>
          <Text style={{ color: 'white', fontSize: 60, }}>
            8
            <Text style={{ color: 'white', fontSize: 30, }}>  Monday</Text>
          </Text>
          <Text style={{ color: 'white', fontSize: 30, marginLeft: 13 }}>Chest</Text>
        </View>
      </View>

      <Timeline
        innerCircle={'dot'}
        dotColor='#fcdb6d'
        circleColor='#1e537d'
        lineColor='#1e537d'
        lineWidth={4}
        timeStyle={{borderWidth: 2, borderColor: '#1e537d', color: '#1e537d', fontWeight: 'bold', borderRadius: 10, padding: 5, textAlign: 'center'}}
        data={ this.state.data } />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
