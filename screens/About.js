import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
 } from 'react-native';
const { width, height } = Dimensions.get('window');
export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: { width, height },
    };
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
          <Image style={{ flex: .2 }} source={require('../assets/img/illustration.png')} style={{ width, height: 200, resizeMode: 'contain', marginTop: -23}} />
          <View style={{ flex: 2, }}>
              <Text style={{ fontSize: 15, lineHeight: 25, marginHorizontal: 20, marginTop: 20, fontWeight: 'bold', color: '#11284b' }}>
                OnCall is an application which provides information about doctors Oncall in hospitals and facilitates easy access to doctors in all sections of the hospital. Also it presents  details about team on duty for each day. The goal is to reduce the time to search and reduce the cost of printing and distributing the papers. The application is available on the Apple and Android stores, The download is free.
                This work is personal and does not belong to any organization.
                Fees may be charged for uploading later.
                To contact us send your request to join  the team or in case to add your hospital on our App , Please send  via the contact us button .
                do not hestiate for any question , suggestion or request .
              </Text>
              <Text style={{ fontSize: 15, lineHeight: 25, marginHorizontal: 20, marginTop: 10, fontWeight: 'bold', color: '#11284b', textAlign: 'left' }}>
                Best Regard,
                Team Work.
              </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
