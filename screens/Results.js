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
    this.renderDetail = this.renderDetail.bind(this)
    this.data = [
      {
        time: '09:00',
        title: 'Doctor #1',
        description: '+20123456789',
        imageUrl: 'https://scontent.faly1-1.fna.fbcdn.net/v/t34.0-12/21325892_1948845228737299_1620304484_n.png?oh=3e362ce657d9ede1294b56e17546f7ce&oe=59AF337C'
      },
      {
        time: '09:00',
        title: 'Doctor #1',
        description: '+20123456789',
        imageUrl: 'https://scontent.faly1-1.fna.fbcdn.net/v/t34.0-12/21325892_1948845228737299_1620304484_n.png?oh=3e362ce657d9ede1294b56e17546f7ce&oe=59AF337C'
      },
      {
        time: '09:00',
        title: 'Doctor #1',
        description: '+20123456789',
        imageUrl: 'https://scontent.faly1-1.fna.fbcdn.net/v/t34.0-12/21325892_1948845228737299_1620304484_n.png?oh=3e362ce657d9ede1294b56e17546f7ce&oe=59AF337C'
      },
    ]
    this.state = {
      size: { width, height },
    };
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }

  static navigationOptions = {
    header: null
  };


  renderDetail(rowData, sectionID, rowID) {
    let title = <Text>{rowData.title}</Text>
    let img = <Image source={{uri: rowData.imageUrl}} style={{ width: 50, height: 50,}}/>
    let desc = <Text>{rowData.description}</Text>

    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('Profile', {})
        }}
        style={{ flex: 1, width, height: 50, flexDirection: 'row'}}>
        <View style={{ flex: 1 }}>
          <Text style={{backgroundColor: 'transparent', fontWeight: 'bold', fontSize: 15}}>{title}</Text>
          <Text style={{backgroundColor: 'transparent', fontSize: 14}}>{desc}</Text>
        </View>
        <View style={{flex: 1,}}>
          {img}
        </View>
      </TouchableOpacity>
    )
  }

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
        renderDetail={this.renderDetail}
        data={this.data} />

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
