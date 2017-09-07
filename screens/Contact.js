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

export default class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      size: { width, height },
      modalVisible: false,
      name: '',
      email: '',
      message: '',
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }

  _sendEmail = () => {
    console.log(this.state.name)
    console.log(this.state.email)
    console.log(this.state.message)
    fetch(`http://oncall-admin.herokuapp.com/api/mail?name=${this.state.name}&email=${this.state.email}&message=${this.state.message}`)
      .then(res => res.json())
      .then((resJson) => {
        console.log(resJson);
      })
      .then(() => {
        Alert.alert('Thanks ' + this.state.name, 'we will responde as soon as possible')
        this.props.navigation.navigate('Home')
      })
  }

  static navigationOptions = {
    title: 'Contact us'
  };


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, marginTop: 20 }} onLayout={this._onLayoutDidChange}>
        <Image source={require('../assets/img/bg-icons.png')} style={{ width, height, position: 'absolute' }} />

           <ScrollView style={{ marginHorizontal: 10 }}>

             <TextInput style={{ borderColor: '#11284b', borderWidth: 2, marginVertical: 7, borderRadius: 20, width: '100%', textAlign: 'center', height: 50, fontWeight: 'bold', color: '#11284b'}}
               onChangeText={(name) => this.setState({ name })}
               placeholder="Name"
               selectionColor="#11284b"
               underlineColorAndroid="transparent"/>
             <TextInput style={{ borderColor: '#11284b', borderWidth: 2, marginVertical: 7, borderRadius: 20, width: '100%', textAlign: 'center', height: 50, fontWeight: 'bold', color: '#11284b' }}
               onChangeText={(email) => this.setState({ email })}
               underlineColorAndroid="transparent"
               placeholder="email" />
             <TextInput style={{ borderColor: '#11284b', borderWidth: 2, marginVertical: 7, borderRadius: 20, width: '100%', textAlign: 'center', height: 100, fontWeight: 'bold', color: '#11284b' }}
               onChangeText={(message) => this.setState({ message })}
               placeholder="message"
               multiline={true}
               underlineColorAndroid="transparent"/>
             <TouchableOpacity
               onPress={ this._sendEmail }
                style={{ }}>
               <Text style={{ backgroundColor: '#11284b', borderRadius: 20, color: 'white', fontWeight: 'bold', textAlign: 'center', padding: 18 }}>Send</Text>
             </TouchableOpacity>
           </ScrollView>



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
