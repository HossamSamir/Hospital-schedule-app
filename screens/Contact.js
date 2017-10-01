import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Alert,
  ActivityIndicator
 } from 'react-native';
const { width, height } = Dimensions.get('window');
export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: { width, height },
      name: '',
      email: '',
      message: '',
      sending: false
    };
  }
  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }
  _sendEmail = () => {
    this.setState({sending: true})
    fetch(`http://oncall-admin.herokuapp.com/api/mail?name=${this.state.name}&email=${this.state.email}&message=${this.state.message}`)
      .then(res => res.json())
      .then(() => {
        Alert.alert('Thanks ' + this.state.name, 'we will responde as soon as possible')
        this.props.navigation.navigate('Home')
      })
  }
  renderBtn() {
    if (this.state.sending == false) {
      return <Text style={{ backgroundColor: '#11284b', borderRadius: 20, color: 'white', fontWeight: 'bold', textAlign: 'center', padding: 18 }}>Send</Text>
    } else {
        return <ActivityIndicator size='large' />
    }
  }
  static navigationOptions = {
    title: 'Contact us'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, marginTop: 20 }} onLayout={this._onLayoutDidChange}>
        <Image source={require('../assets/img/new/bg_icons.png')} style={{ width, height, position: 'absolute' }} />
           <View style={{ marginHorizontal: 10 }}>
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
               { this.renderBtn() }
             </TouchableOpacity>
           </View>
      </View>
    );
  }
}
