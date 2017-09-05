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
    title: 'About us'
  };


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, }} onLayout={this._onLayoutDidChange}>
        <Image source={require('../assets/img/bg-icons.png')} style={{ width, height, position: 'absolute' }} />
        <ScrollView style={{ flex: 1 }}>
          <Image style={{ flex: .2 }} source={require('../assets/img/illustration.png')} style={{ width, height: 200, resizeMode: 'cover'}} />
          <View style={{ flex: 2, alignItems: 'center' }}>
              <Text style={{ fontSize: 17, lineHeight: 25, marginHorizontal: 20, marginVertical: 20, fontWeight: 'bold', color: '#11284b' }}>
                OnCall is a application which provides information about doctors Oncall in hospitals and facilitates easy access to doctors in all sections of the hospital. Also it presents  details about team on duty for each day. The goal is to reduce the time to search and reduce the cost of printing and distributing the papers. The application is available on the Apple and Android stores, The download is free.
                This work is personal and does not belong to any organization.
                Fees may be charged for uploading later.
                To contact us send your request to join  the team or in case to add your hospital on our App , Please send  via the contact us button .
                do not hestiate for any question , suggestion or request .
                <Text>
                  Best Regard,
                  Team Work.
                </Text>
              </Text>
          </View>
        </ScrollView>


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
