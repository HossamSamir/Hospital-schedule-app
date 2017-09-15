import React from 'react';
import {
  ScrollView,
  Text,
  TouchableHighlight,
  View,
  Image,
  Dimensions,
 } from 'react-native';
const { width, height } = Dimensions.get('window');
export default class Hospitals extends React.Component {
  componentDidMount() {
    this.fetchHospitals();
  }
  fetchHospitals() {
    fetch('https://oncall-admin.herokuapp.com/api/hospitals')
    .then((res) => res.json())
    .then((resJson) => {
      resJson.map((hospital) => {
        this.state.Hospitals.push(hospital)
      })
    })
    .then(() => {
      this.setState({doneFetching: true})
    })
  }
  constructor(props) {
    super(props);
    this.state = {
      size: { width, height },
      Hospitals: [],
      SelectedHos: '',
      doneFetching: false
    };
  }
  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }
  static navigationOptions = {
    header: null
  };
  _Hopitals = () => {
    if (this.state.doneFetching == false) {
      return (
        <Text style={{ textAlign: 'center' }}>Loading...</Text>
      )
    } else {
      return this.state.Hospitals.map((Hospital) => {
        return (
          <View key={Hospital.id} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginRight: 20 }}>
            <Image style={{ flex: .2 }} source={require('../assets/img/h-icon.png')} style={{ width: 50, height: 50, marginHorizontal: 10}} />
            <TouchableHighlight
               onPress={ () => {
                 this.setState({ SelectedHos: Hospital.name })
                 this.props.navigation.navigate('Departments', { Hospital: Hospital})
               }}
               style={{
                 flex: 1,
                 backgroundColor: Hospital.name == this.state.SelectedHos ? 'white' : '#11284b',
                 borderColor: '#11284b',
                 borderWidth: 3,
                 margin: 10,
                 width: '80%',
                 padding: 18,
                 borderRadius: 15,
                 alignItems: 'center',
                 justifyContent: 'center'
                }}>
              <Text style={{ color: Hospital.name == this.state.SelectedHos ? '#11284b' : 'white', fontWeight: 'bold', fontSize: 15, textAlign: 'center'}}>{ Hospital.name }</Text>
            </TouchableHighlight>
          </View>
        )
      })
    }
  }
  render() {
    return (
      <View style={{ flex: 1, marginTop: 50 }} onLayout={this._onLayoutDidChange}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../assets/img/bg.png')} style={{ width: width, height: height, position: 'absolute' }} />
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%', }}>
            <View style={{ flex: .8, backgroundColor: 'transparent' }}>
              <Image source={require('../assets/img/1.png')} style={{ width: 250, height: 210, resizeMode: 'stretch' }} />
            </View>
            <View style={{ flex: 1, backgroundColor: 'transparent', marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 28, color: '#11284b', fontWeight: 'bold' }}>Choose A Hospital</Text>
              <Text style={{ color: '#11284b', opacity: .8, fontWeight: 'bold' }}>Scroll down for more</Text>
              <ScrollView style={{ flex: 1, marginTop: 30, backgroundColor: 'transparent', width }}>

                {this._Hopitals()}

              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
