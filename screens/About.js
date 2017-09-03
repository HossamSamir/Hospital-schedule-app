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
    header: null
  };


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, }} onLayout={this._onLayoutDidChange}>
        <Image source={require('../assets/img/bg-icons.png')} style={{ width, height, position: 'absolute' }} />
        <View style={{ flex: 1 }}>
          <Image style={{ flex: .2 }} source={require('../assets/img/illustration.png')} style={{ width, height: 250, }} />
          <View style={{ flex: 2, alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 15 }}>About us</Text>
            <ScrollView style={{ marginHorizontal: 30, flex: 1 }}>
              <Text style={{ fontSize: 15, lineHeight: 20 }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Text>
            </ScrollView>
            <TouchableHighlight style={{ flex: .3, justifyContent: 'center', alignItems: 'center', backgroundColor: '#11284b', width }}>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Get started</Text>
            </TouchableHighlight>
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
