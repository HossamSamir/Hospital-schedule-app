import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
 } from 'react-native';
import Timeline from 'react-native-timeline-listview';
const { width, height } = Dimensions.get('window');
export default class Profile extends React.Component {
  componentDidMount() {
    this.fetchProfie();
  }
  fetchProfie() {
    fetch(`https://oncall-admin.herokuapp.com/api/record_by_id?record_id=${this.props.navigation.state.params.id}`)
    .then((res) => res.json())
    .then((resJson) => {
      this.setState({
        name: resJson[0].title,
        phone: resJson[0].description,
        extension: resJson[0].extintion,
        pager: resJson[0].pager,
        email: resJson[0].email,
        position: resJson[0].position
      })
    })
    .then(() => {
      this.setState({
        doneFetching: true
      })
    })
  }
  constructor(props) {
    super(props);
    this.state = {
      size: { width, height },
      name: '',
      phone: '',
      extension: '',
      pager: '',
      email: '',
      position: '',
      doneFetching: false
    };
  }
  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }
  chooseImg(x) {
    switch (x) {
      case 'name':
          return <Image style={{ height: 25, width: 25, }} source={require('../assets/img/name.png')} />
        break;
      case 'position':
          return <Image style={{ height: 25, width: 25, }} source={require('../assets/img/position.png')} />
        break;
      case 'pager':
          return <Image style={{ height: 25, width: 25, }} source={require('../assets/img/pager.png')} />
        break;
      case 'phone':
          return <Image style={{ height: 25, width: 25, }} source={require('../assets/img/phone.png')} />
        break;
      case 'extension':
          return <Image style={{ height: 25, width: 25, }} source={require('../assets/img/extension.png')} />
        break;
      case 'email':
          return <Image style={{ height: 25, width: 25, }} source={require('../assets/img/email.png')} />
        break;
    }
  }
  filterData(x) {
    if (this.state[x] != '') {
      return (
          <View style={{ flex: 1, flexDirection: 'row', marginTop: 15, marginHorizontal: 15, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{ flex: .3 }}>
              {this.chooseImg(x)}
            </View>
            <Text style={{ flex: 1.5, backgroundColor: 'transparent', marginLeft: 10, color: '#1e537d', fontWeight: 'bold', fontSize: 15 }}>
              {this.state[x]}</Text>
          </View>
      )
    }
  }
  renderData() {
    if (this.state.doneFetching == false) {
      return (
        <Text>Loading</Text>
      )
    } else {
      return (
        <View style={{ marginBottom: 30 }}>
            { this.filterData('name') }
            { this.filterData('position') }
            { this.filterData('pager') }
            { this.filterData('phone') }
            { this.filterData('extension') }
            { this.filterData('email') }
        </View>
      )
    }
  }
  static navigationOptions = {
    title: 'profile'
  };
  render() {
    return (
      <ScrollView style={{ flex: 1, }} onLayout={this._onLayoutDidChange}>
        <Image source={require('../assets/img/bg-icons.png')} style={{ width: width, height: height, position: 'absolute' }} />
        <Image source={require('../assets/img/cover.png')} style={{ width, height: 200, position: 'absolute'}} />
        <View style={{ backgroundColor: 'transparent', width, height: 350, alignItems: 'center', marginBottom: -50 }}>
          <Image source={require('../assets/img/avatar.png')} style={{ width: 200, height: 200, position: 'absolute', marginTop: 100}} />
        </View>
        { this.renderData() }
    </ScrollView>
    );
  }
}
