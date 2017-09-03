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

        {time: '09:00', title: (<Text style={{backgroundColor: 'transparent'}}>Doctor #1</Text>), description: (<Text style={{backgroundColor: 'transparent'}}>+2123456789</Text>), },

        {time: '09:00', title: (<Text style={{backgroundColor: 'transparent'}}>Doctor #2</Text>), description: (<Text style={{backgroundColor: 'transparent'}}>+2123456789</Text>), },

        {time: '09:00', title: (<Text style={{backgroundColor: 'transparent'}}>Doctor #3</Text>), description: (<Text style={{backgroundColor: 'transparent'}}>+2123456789</Text>), },

        {time: '09:00', title: (<Text style={{backgroundColor: 'transparent'}}>Doctor #4</Text>), description: (<Text style={{backgroundColor: 'transparent'}}>+2123456789</Text>), },

        {time: '09:00', title: (<Text style={{backgroundColor: 'transparent'}}>Doctor #5</Text>), description: (<Text style={{backgroundColor: 'transparent'}}>+2123456789</Text>), },
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

      <View style={{ marginTop: 20 }}>
        <Text>
          Selected Hospital:
            1.name => {this.props.navigation.state.params.Hospital.name + "\n"}
            2. ID => {this.props.navigation.state.params.Hospital.id + "\n\n"}
          Selected Department:
            1. name => {this.props.navigation.state.params.Department.name + "\n"}
            1. ID => {this.props.navigation.state.params.Department.id + "\n\n"}
          Selected Date: {this.props.navigation.state.params.Date}
        </Text>
      </View>

      <Timeline data={ this.state.data } />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
