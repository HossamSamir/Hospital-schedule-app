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
        <Image source={require('../assets/img/bg-logo.png')} style={{ width, height, position: 'absolute' }} />

        <View style={{ flex: .8, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ flex: .2 }} source={require('../assets/img/illustration.png')} style={{ width, height: 200, resizeMode: 'contain', marginTop: -23}} />
        </View>
        <View style={{ flex: .3 }}></View>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigate('About')
            }}
            style={{
            flex: 1,
            backgroundColor: 'white',
            marginHorizontal: 18,
            marginVertical: 40,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: '#11284b',
            borderWidth: 1,
            borderRadius: 10,
           }}>
              <Image source={require('../assets/img/about.png')} style={{ width: 50, height: 50, margin: 5 }} />
             <Text style={{fontSize: 18, fontWeight: 'bold', color: '#1e537d', margin: 5}}>About us</Text>
         </TouchableOpacity>

         <TouchableOpacity
           onPress={() => {
             navigate('Contact')
           }}
           style={{
             flex: 1,
             backgroundColor: 'white',
             marginHorizontal: 18,
             marginVertical: 40,
             shadowColor: '#000',
             shadowOffset: { width: 0, height: 2 },
             shadowOpacity: 0.5,
             shadowRadius: 2,
             alignItems: 'center',
             justifyContent: 'center',
             borderColor: '#11284b',
             borderWidth: 1,
             borderRadius: 10,
          }}>
          <Image source={require('../assets/img/contact-us.png')} style={{ width: 50, height: 50, margin: 5 }} />
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#1e537d', margin: 5 }}>Contact us</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: .3 }}></View>

        <TouchableHighlight
          onPress={ () => {
            navigate('Hospitals')
          }}
          style={{ flex: .2, backgroundColor: '#11284b', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginVertical: 8 }}>Get started</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
});
