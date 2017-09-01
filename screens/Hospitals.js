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

const { width, height } = Dimensions.get('window');

export default class Hospitals extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      size: { width, height },
      Hospitals: [
        [
          {name: 'Hospital #1', id: 1},
          {name: 'Hospital #2', id: 2}
        ],
        [
          {name: 'Hospital #3', id: 3},
          {name: 'Hospital #4', id: 4}
        ],
        [
          {name: 'Hospital #5', id: 5},
          {name: 'Hospital #6', id: 6}
        ],
      ],
      SelectedHos: '',
    };
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }

  static navigationOptions = {
    header: null
  };

  _Hopitals = () => {
    return this.state.Hospitals.map((Hospital, i) => {
      return (
        <View key={Hospital[0].id} style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <View style={{ flex: 1  }}>
            <TouchableHighlight
               onPress={ () => {
                 this.setState({ SelectedHos: Hospital[0].name })
                 this.props.navigation.navigate('Departments', { name: Hospital[0].name })
               }}
               style={{
                 backgroundColor: Hospital[0].name == this.state.SelectedHos ? 'white' : '#11284b',
                 borderColor: '#11284b',
                 borderWidth: 3,
                 margin: 10,
                 padding: 18,
                 borderRadius: 15,
                 alignItems: 'center',
                 justifyContent: 'center'
                }}>
              <Text style={{ color: Hospital[0].name == this.state.SelectedHos ? '#11284b' : 'white', fontWeight: 'bold', fontSize: 15, textAlign: 'center'}}>{ Hospital[0].name }</Text>
            </TouchableHighlight>
          </View>

          <View style={{ flex: 1  }}>
            <TouchableHighlight
               onPress={ () => {
                 this.setState({ SelectedHos: Hospital[1].name })
                 this.props.navigation.navigate('Departments', { name: Hospital[1].name })
               }}
               style={{
                 backgroundColor: Hospital[1].name == this.state.SelectedHos ? 'white' : '#11284b',
                 borderColor: '#11284b',
                 borderWidth: 3,
                 margin: 10,
                 padding: 18,
                 borderRadius: 15,
                 alignItems: 'center',
                 justifyContent: 'center'
                }}>
              <Text style={{ color: Hospital[1].name == this.state.SelectedHos ? '#11284b' : 'white', fontWeight: 'bold', fontSize: 15, textAlign: 'center'}}>{ Hospital[1].name }</Text>
            </TouchableHighlight>
          </View>
        </View>
      )
    })
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, marginTop: 50 }} onLayout={this._onLayoutDidChange}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../assets/img/bg.png')} style={{ width: width, height: height, position: 'absolute' }} />
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%', }}>
            <View style={{ flex: .8, backgroundColor: 'transparent' }}>
              <Image source={require('../assets/img/1.png')} style={{ width: 250, height: 210, resizeMode: 'stretch' }} />
            </View>
            <View style={{ flex: 1, backgroundColor: 'transparent', marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 28, color: '#11284b', fontWeight: 'bold' }}>Choose A Hospital</Text>
              <Text style={{ color: '#11284b', opacity: .8, fontWeight: 'bold' }}>Scroll down for more</Text>
              <ScrollView style={{ flex: 1, marginTop: 30, backgroundColor: 'transparent', width }}>

                {this._Hopitals()}

              </ScrollView>
            </View>
          </View>
        </View>
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
