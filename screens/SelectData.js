import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Button,
  Image,
  TouchableHighlight,
  Dimensions,
  Alert
 } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import {Calendar} from 'react-native-calendars';
const { width, height } = Dimensions.get('window');

export default class SelectedDate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      size: { width, height },
      SelectedDate: this._getCurrentDate()
    };
    this.onDayPress = this.onDayPress.bind(this);
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }

  _getCurrentDate = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(dd<10)
        dd = '0'+dd

    if(mm<10)
        mm = '0'+mm

    today = yyyy + '-' + mm + '-' + dd;
    return today
  }

  static navigationOptions = {
    header: null
  };

  onDayPress(day) {
    this.setState({
      SelectedDate: day.dateString
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, marginTop: 20 }} onLayout={this._onLayoutDidChange}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../assets/img/bg.png')} style={{ width: width, height: height, position: 'absolute' }} />
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%', }}>
            <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 28, color: '#11284b', fontWeight: 'bold' }}>Choose Date</Text>
                <Calendar
                  style={{
                    flex: 1,
                    borderTopWidth: 1,
                    paddingTop: 5,
                    width: width-20,
                    borderBottomWidth: 1,
                    borderColor: '#eee',
                  }}
                  markedDates={{[this.state.SelectedDate]: {selected: true, marked: true}}}
                  onDayPress={this.onDayPress}
                  hideArrows={false}
                  theme={{
                    selectedDayBackgroundColor: '#11284b',
                    calendarBackground: 'rgba(255, 255, 255, .5)',
                    arrowColor: '#11284b'
                  }}
                />
              <TouchableHighlight onPress={() => console.log(this.state.SelectedDate)} style={{ backgroundColor: '#11284b', width: width, }}>
                <Text style={{ fontSize: 30, color: 'white', padding: 10, textAlign: 'center', fontWeight: 'bold' }}>
                  Search
                </Text>
              </TouchableHighlight>
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
