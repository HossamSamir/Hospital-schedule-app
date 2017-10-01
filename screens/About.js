import React from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
 } from 'react-native';
 import { List, ListItem, } from 'react-native-elements';
const { width, height } = Dimensions.get('window');
export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: { width, height },
      users: [
        {
          txt: 'OnCall is an application which provides information about doctors Oncall in hospitals and facilitates easy access to doctors in all sections of the hospital. Also it presents  details about team on duty for each day. The goal is to reduce the time to search and reduce the cost of printing and distributing the papers. The download is free. This work is personal and does not belong to any organization. Fees may be charged for uploading later. To contact us send your request to join  the team or in case to add your hospital on our App , Please send  via the contact us button . do not hestiate for any question , suggestion or request .',
          id: 1
        },
        {
          txt: 'Best Regard,',
          id: 2
        },
        {
          txt: 'Team Work.',
          id: 3
        }
    ],
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
    return (
      <View style={{ flex: 1, }} onLayout={this._onLayoutDidChange}>
        <Image source={require('../assets/img/new/bg_icons.jpg')} style={{ width, height, position: 'absolute' }} />




          <List containerStyle={{flex: 1, marginTop: 250, flexDirection: 'row', borderTopWidth: 0}}>
            <FlatList
              data = {this.state.users}
              renderItem = {({ item }) => (
                <Text style={{ fontSize: 15, lineHeight: 25, marginHorizontal: 20, fontWeight: 'bold', color: '#11284b' }}>{item.txt}</Text>
              )}
              keyExtractor={item => item.id}
              ListHeaderComponent = {this._renderHeader}
            />
          </List>





      </View>
    );
  }
}
