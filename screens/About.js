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

export default class About extends React.Component {

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

  static navigationOptions = {
    header: null
  };


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, }} onLayout={this._onLayoutDidChange}>
        <Image source={require('../assets/img/bg-icons.png')} style={{ width, height, position: 'absolute' }} />
        <TouchableOpacity style={{marginTop: 20, marginLeft: 10, position: 'absolute', zIndex: 2}} onPress={ () => this.setModalVisible(true) }>
          <Image source={require('../assets/img/icon.png')} style={{ width: 45, height: 45, }} />
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <Image style={{ flex: .2 }} source={require('../assets/img/illustration.png')} style={{ width, height: 250, }} />
          <View style={{ flex: 2, alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 15 }}>About us</Text>
            <ScrollView style={{ marginHorizontal: 30, flex: 1 }}>
              <Text style={{ fontSize: 15, lineHeight: 20 }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Text>
            </ScrollView>
            <TouchableHighlight
              onPress={() => {
                this.props.navigation.navigate('Hospitals', {})
              }}
              style={{ flex: .4, justifyContent: 'center', alignItems: 'center', backgroundColor: '#11284b', width }}>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Get started</Text>
            </TouchableHighlight>
          </View>
        </View>


        <Modal
          style={{ flex: 1, backgroundColor: 'transparent' }}
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >

          <TouchableHighlight
            style={{ flex: 1, backgroundColor: 'transparent' }}
            onPress={() => {
            this.setModalVisible(!this.state.modalVisible)
          }}>
            <Text></Text>
          </TouchableHighlight>

           <View style={{marginTop: 22, flex: 4}}>
             <Image source={require('../assets/img/contact.png')} style={{ width, height, position: 'absolute', }} />
               <TouchableHighlight style={{marginTop: 20, marginLeft: 10, position: 'absolute', zIndex: 2}} onPress={ () => this.setModalVisible(!this.state.modalVisible) }>
                 <Image source={require('../assets/img/close.png')} style={{ width: 45, height: 45, marginLeft: '83%'}} />
               </TouchableHighlight>
            <ScrollView style={{ marginHorizontal: 20, marginTop: 45 }}>

              <TextInput style={{ borderColor: '#11284b', borderWidth: 2, marginVertical: 7, borderRadius: 20, width: '80%', textAlign: 'center', height: 50, }}
                onChangeText={(name) => this.setState({ name })}
                placeholder="Name" />
              <TextInput style={{ borderColor: '#11284b', borderWidth: 2, marginVertical: 7, borderRadius: 20, width: '80%', textAlign: 'center', height: 50, }}
                onChangeText={(email) => this.setState({ email })}
                placeholder="email" />
              <TextInput style={{ borderColor: '#11284b', borderWidth: 2, marginVertical: 7, borderRadius: 20, width: '80%', textAlign: 'center', height: 100, }}
                onChangeText={(message) => this.setState({ message })}
                placeholder="message" />
              <TouchableOpacity
                onPress={ () => {
                  Alert.alert('Thanks for your feedback' + this.state.name + ' :)', 'we will responde soon')
                }}
                 style={{ backgroundColor: '#11284b', borderWidth: 2, borderColor: '#11284b', borderRadius: 20, width: '80%' }}>
                <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', padding: 18 }}>Send</Text>
              </TouchableOpacity>
            </ScrollView>

         </View>
        </Modal>


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
