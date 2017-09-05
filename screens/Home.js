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
  Modal,
  TextInput,
  Alert
 } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

const { width, height } = Dimensions.get('window');

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      size: { width, height },
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
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
      <View style={{ flex: 1, backgroundColor: 'white'}} onLayout={this._onLayoutDidChange}>

        <View style={{ flex: .8, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../assets/img/o.png')} style={{ flex: 1, alignSelf: 'stretch', width: undefined, height: undefined, margin: 40, marginBottom: 10, resizeMode: 'contain'}} />
        </View>

        <View style={{ flex: 1, flexDirection: 'row',}}>
          <TouchableOpacity
            onPress={() => {
              navigate('About')
            }}
            style={{ flex: 1, backgroundColor: 'white', marginHorizontal: 18, marginVertical: 50,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            alignItems: 'center',
            justifyContent: 'center'
           }}>
           <Image source={require('../assets/img/about.png')} style={{ flex: 1, alignSelf: 'stretch', width: undefined, height: undefined, margin: 40, marginBottom: 0, resizeMode: 'contain'}} />
           <Text style={{flex: 1, marginTop: 10, fontSize: 18, fontWeight: 'bold', color: '#1e537d'}}>About us</Text>
         </TouchableOpacity>

         <TouchableOpacity
           onPress={() => {
             navigate('Contact')
           }}
           style={{ flex: 1, backgroundColor: 'white', marginHorizontal: 18, marginVertical: 50,
           shadowColor: '#000',
           shadowOffset: { width: 0, height: 2 },
           shadowOpacity: 0.5,
           shadowRadius: 2,
           alignItems: 'center',
           justifyContent: 'center'
          }}>
          <Image source={require('../assets/img/contact-us.png')} style={{ flex: 1, alignSelf: 'stretch', width: undefined, height: undefined, margin: 40, marginBottom: 0, resizeMode: 'contain'}} />
          <Text style={{flex: 1, marginTop: 10, fontSize: 18, fontWeight: 'bold', color: '#1e537d'}}>Contact us</Text>
        </TouchableOpacity>
      </View>

        <TouchableHighlight style={{ flex: .2, backgroundColor: '#11284b', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Get started</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
});
