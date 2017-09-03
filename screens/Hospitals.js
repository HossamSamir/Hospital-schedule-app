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

export default class Hospitals extends React.Component {

  componentDidMount() {
    this.fetchHospitals();
  }
  fetchHospitals() {
    fetch('https://oncall-admin.herokuapp.com/api/hospitals')
    .then((res) => res.json())
    .then((resJson) => {
      resJson.map((hospital) => {
        if (hospital[1].id != null) {
          this.state.Hospitals.push(hospital)
        } else {
          this.setState({theOddOne: hospital[0]})
          console.log(this.state.theOddOne);
        }
      })
    })
    .then(() => {
      this.setState({doneFetching: true})
      // this.state.Hospitals.map((x) => {
      //   console.log(x[0].name);
      //   console.log(x[1].name);
      // })
    })
  }
  constructor(props) {
    super(props);
    this.state = {
      size: { width, height },
      Hospitals: [],
      theOddOne: null,
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
      return this.state.Hospitals.map((Hospital, i) => {
        return (
          <View key={Hospital[0].id} style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'  }}>
              <TouchableHighlight
                 onPress={ () => {
                   this.setState({ SelectedHos: Hospital[0].name })
                   this.props.navigation.navigate('Departments', { Hospital: Hospital[0]})
                 }}
                 style={{
                   backgroundColor: Hospital[0].name == this.state.SelectedHos ? 'white' : '#11284b',
                   borderColor: '#11284b',
                   borderWidth: 3,
                   margin: 10,
                   padding: 18,
                   borderRadius: 15,
                   alignItems: 'center',
                   justifyContent: 'center'
                  }}>
                <Text style={{ color: Hospital[0].name == this.state.SelectedHos ? '#11284b' : 'white', fontWeight: 'bold', fontSize: 15, textAlign: 'center'}}>{ Hospital[0].name }</Text>
              </TouchableHighlight>
            </View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'  }}>
              <TouchableHighlight
                 onPress={ () => {
                   this.setState({ SelectedHos: Hospital[1].name })
                   this.props.navigation.navigate('Departments', { Hospital: Hospital[1]})
                 }}
                 style={{
                   backgroundColor: Hospital[1].name == this.state.SelectedHos ? 'white' : '#11284b',
                   borderColor: '#11284b',
                   borderWidth: 3,
                   margin: 10,
                   padding: 18,
                   borderRadius: 15,
                   alignItems: 'center',
                   justifyContent: 'center'
                  }}>
                <Text style={{ color: Hospital[1].name == this.state.SelectedHos ? '#11284b' : 'white', fontWeight: 'bold', fontSize: 15, textAlign: 'center'}}>{ Hospital[1].name }</Text>
              </TouchableHighlight>
            </View>
          </View>
        )
      })
    }
  }

  _HopitalsIsOdd = () => {
    if (this.state.doneFetching == true && this.state.theOddOne != null) {
      return (
        <View key={this.state.theOddOne.id} style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'  }}>
            <TouchableHighlight
               onPress={ () => {
                 this.setState({ SelectedHos: this.state.theOddOne.name })
                 this.props.navigation.navigate('Departments', { Hospital: this.state.theOddOne})
               }}
               style={{
                 backgroundColor: this.state.theOddOne.name == this.state.SelectedHos ? 'white' : '#11284b',
                 borderColor: '#11284b',
                 borderWidth: 3,
                 margin: 10,
                 padding: 18,
                 borderRadius: 15,
                 alignItems: 'center',
                 justifyContent: 'center'
                }}>
              <Text style={{ color: this.state.theOddOne.name == this.state.SelectedHos ? '#11284b' : 'white', fontWeight: 'bold', fontSize: 15, textAlign: 'center'}}>{ this.state.theOddOne.name }</Text>
            </TouchableHighlight>
          </View>

          <View style={{ flex: 1  }}>
          </View>
        </View>
      )
    }
  }

  render() {
    const { navigate } = this.props.navigation;
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
                {this._HopitalsIsOdd()}

              </ScrollView>
            </View>
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
