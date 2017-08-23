import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  Alert,
  TouchableHighlight
} from 'react-native';
import Carousel from 'react-native-looped-carousel';
import DatePicker from 'react-native-datepicker';

const { width, height } = Dimensions.get('window');

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      size: { width, height },
      Hospitals: ['Hospital #1', 'Hospital #2', 'Hospital #3', 'Hospital #4', 'Hospital #5', 'Hospital #6', 'Hospital #7'],
      SelectedHos: '',
      date:"2016-05-15"
    };
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }

  _Hopitals = (rownum) => {
    return this.state.Hospitals.map((Hospital) => (
      <TouchableHighlight
         onPress={ () => {this.setState({ SelectedHos: Hospital })} }
         style={{
           backgroundColor: Hospital == this.state.SelectedHos ? 'white' : '#11284b',
           borderColor: '#11284b',
           borderWidth: 3,
           margin: 10,
           padding: 18,
           borderRadius: 15,
           height: 50,
           alignItems: 'center',
           justifyContent: 'center'
          }}>
        <Text style={{ color: Hospital == this.state.SelectedHos ? '#11284b' : 'white', fontWeight: 'bold', fontSize: 15,}}>{ Hospital }</Text>
      </TouchableHighlight>
    ))
  }


  render() {
    return (
      <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>
        <Carousel
          style={this.state.size}
          bullets={true}
          autoplay={false}
          bulletStyle={{ borderColor: '#11284b', backgroundColor: 'transparent' }}
          chosenBulletStyle={{ borderColor: '#11284b', backgroundColor: '#11284b' }}
          bulletsContainerStyle={{ marginBottom: 50 }}
          onAnimateNextPage={(p) => console.log(p)}
        >

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('./assets/img/bg.png')} style={{ width: width, height: height, position: 'absolute' }} />
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%', }}>
            <View style={{ flex: .8, backgroundColor: 'transparent' }}>
              <Image source={require('./assets/img/1.png')} style={{ width: 250, height: 210, resizeMode: 'stretch' }} />
            </View>
            <View style={{ flex: 1, backgroundColor: 'transparent', marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 28, color: '#11284b', fontWeight: 'bold' }}>Choose A Hospital</Text>
              <ScrollView horizontal={true} style={{ marginTop: 20 }}>
                 { this._Hopitals() }
              </ScrollView>
              <Text style={{ marginTop: 30, color: '#11284b', fontWeight: 'bold' }}>Selected Hospital: {this.state.SelectedHos}</Text>
            </View>
          </View>
        </View>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('./assets/img/bg.png')} style={{ width: width, height: height, position: 'absolute' }} />
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%', }}>
            <View style={{ flex: .8, backgroundColor: 'transparent' }}>
              <Image source={require('./assets/img/2.png')} style={{ width: 250, height: 190, marginTop: 20, resizeMode: 'stretch' }} />
            </View>
            <View style={{ flex: 1, backgroundColor: 'transparent', marginTop: -200, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 23, color: '#11284b', fontWeight: 'bold' }}>Choose A Date</Text>



                <DatePicker
                        style={{width: 200}}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        onDateChange={ (date) => {this.setState({ date })} }
                        customStyles={{
                          dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                          },
                          dateInput: {
                            marginLeft: 36
                          }
                        }}
                        onDateChange={(date) => {this.setState({date: date})}}
                      />

                    <Text style={{ marginTop: 30, color: '#11284b', fontWeight: 'bold' }}>Selected Date: {this.state.date}</Text>

            </View>
          </View>
        </View>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('./assets/img/bg.png')} style={{ width: width, height: height, position: 'absolute' }} />
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%', }}>
            <View style={{ flex: .8, backgroundColor: 'transparent' }}>
              <Image source={require('./assets/img/11.png')} style={{ width: 250, height: 210, resizeMode: 'stretch' }} />
            </View>
            <View style={{ flex: 1, backgroundColor: 'transparent', marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 23, color: '#11284b', fontWeight: 'bold' }}>Choose A Category</Text>
              <ScrollView horizontal={true}>
                {this._Hopitals()}
              </ScrollView>
            </View>
          </View>
        </View>

        </Carousel>
      </View>
    );
  }
}
