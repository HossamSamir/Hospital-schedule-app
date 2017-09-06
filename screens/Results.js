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
import Timeline from 'react-native-timeline-listview';

const { width, height } = Dimensions.get('window');

export default class Results extends React.Component {

  componentDidMount() {
    this.fetchDocs();
    this.getDayName();
  }

  getDayName() {
    console.log('=================================');
    console.log(this.props.navigation.state.params.Date);
    var d = new Date(this.props.navigation.state.params.Date);
    var dayName = this.state.week[d.getDay()];
    this.setState({ DayToShow: dayName })
  }

  fetchDocs() {
    fetch(
      `https://oncall-admin.herokuapp.com/api/search?section_id=${this.props.navigation.state.params.Department.id}&hospital_id=${this.props.navigation.state.params.Hospital.id}&date=${this.props.navigation.state.params.Date}`)
    .then((res) => res.json())
    .then((resJson) => {
      resJson.map((doc) => {
        if (doc.title != '') {
          this.data.push(doc)
        }
      })
    })
    .then(() => {
      this.setState({doneFetching: true})
    })
  }


  constructor(props) {
    super(props);
    this.renderDetail = this.renderDetail.bind(this)
    this.data = [];
    this.state = {
      size: { width, height },
      doneFetching: false,
      week: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      DayToShow: 'test'
    };
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }

  static navigationOptions = {
    header: null
  };


  renderDetail(rowData, sectionID, rowID) {
    if (this.state.doneFetching == false) {
        return '...'
    } else {
      let title = <Text>{rowData.title}</Text>
      let img = <Image source={{uri: rowData.image}} style={{ flex: 1, alignSelf: 'stretch', width: undefined, height: undefined, resizeMode: 'contain' }}/>
      let desc = <Text>{rowData.description}</Text>
        return (
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Profile', {id: rowData.id})
            }}
            style={{ flex: 1, height: 50, flexDirection: 'row'}}>
            <View style={{ flex: 1 }}>
              <Text style={{backgroundColor: 'transparent', fontWeight: 'bold', fontSize: 15}}>{title}</Text>
              <Text style={{backgroundColor: 'transparent', fontSize: 14}}>{desc}</Text>
            </View>
            <View style={{flex: 1,}}>
              {img}
            </View>
          </TouchableOpacity>
      )
    }
  }



  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, }} onLayout={this._onLayoutDidChange}>

        <Image source={require('../assets/img/bg-icons.png')} style={{ width: width, height: height, position: 'absolute' }} />

      <View style={{ }}>
        <Image source={require('../assets/img/results.png')} style={{ width, height: 200, position: 'absolute'}} />
        <View style={{ backgroundColor: 'transparent', width, marginTop: 30, marginLeft: 30, height: 180 }}>
          <Text style={{ color: 'white', fontSize: 60, }}>
            {this.props.navigation.state.params.DayNum}
            <Text style={{ color: 'white', fontSize: 30, }}>  {this.state.DayToShow}</Text>
          </Text>
          <Text style={{ color: 'white', fontSize: 30, marginLeft: 13 }}>{this.props.navigation.state.params.Department.name}</Text>
        </View>
      </View>

      <Timeline
        innerCircle={'dot'}
        dotColor='#fcdb6d'
        circleColor='#1e537d'
        lineColor='#1e537d'
        lineWidth={4}
        timeContainerStyle={{minWidth:75,}}
        timeStyle={{borderWidth: 2, borderColor: '#1e537d', color: '#1e537d', fontWeight: 'bold', borderRadius: 10, padding: 5, textAlign: 'center'}}
        renderDetail={this.renderDetail}
        data={this.data} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
