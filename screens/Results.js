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
  Alert
 } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import Timeline from 'react-native-timeline-listview';
import { EvilIcons, Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default class Results extends React.Component {

  componentDidMount() {
    this.fetchDocs();
    this.getDayName();
  }

  getDayName() {
    var d = new Date(this.state.Date);
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
          this.state.data.push(doc)
        }
      })
    })
    .then(() => {
      this.setState({doneFetching: true})
    })
  }

  _GoNext = () => {
    this.setState({data: []})
    fetch(
      `https://oncall-admin.herokuapp.com/api/forward?section_id=${this.props.navigation.state.params.Department.id}&hospital_id=${this.props.navigation.state.params.Hospital.id}&date=${this.state.Date}`)
    .then((res) => res.json())
    .then((resJson) => {
      resJson.map((doc) => {
        if (doc.title != '') {
          this.state.data.push(doc)
          this.setState({Date: doc.date})
        }
      })
    })
    .then(() => {
      this.setState({doneFetching: true, DayNum: this.state.DayNum+1})
    })
    .then(() => {
      this.getDayName()
    })
  }

  _GoPrev = () => {
    this.setState({data: []})
    fetch(
      `https://oncall-admin.herokuapp.com/api/backward?section_id=${this.props.navigation.state.params.Department.id}&hospital_id=${this.props.navigation.state.params.Hospital.id}&date=${this.state.Date}`)
    .then((res) => res.json())
    .then((resJson) => {
      resJson.map((doc) => {
        if (doc.title != '') {
          this.state.data.push(doc)
          this.setState({Date: doc.date})
        }
      })
    })
    .then(() => {
      this.setState({doneFetching: true, DayNum: this.state.DayNum-1})
    })
    .then(() => {
      this.getDayName()
    })
  }

  constructor(props) {
    super(props);
    this.renderDetail = this.renderDetail.bind(this)
    this.state = {
      size: { width, height },
      doneFetching: false,
      data: [],
      week: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      DayToShow: 'test',
      DepartmentName: this.props.navigation.state.params.Department.name,
      DayNum: this.props.navigation.state.params.DayNum,
      Date: this.props.navigation.state.params.Date
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
        <View style={{ flexDirection: 'row', backgroundColor: 'transparent', width, height: 200 }}>

          <View style={{ flex: .2, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={ this._GoPrev }>
              <Ionicons name='ios-arrow-dropleft-circle' size={50} color='#c3c3c3' style={{ backgroundColor: 'transparent',  }} />
            </TouchableOpacity>
        </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'white', fontSize: 60, }}>
              {this.state.DayNum}
              <Text style={{ color: 'white', fontSize: 30, }}>  {this.state.DayToShow}</Text>
            </Text>
            <Text style={{ color: 'white', fontSize: 30, marginLeft: 13 }}>{this.state.DepartmentName}</Text>
          </View>
          <View style={{ flex: .2, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={ this._GoNext }>
              <Ionicons name='ios-arrow-dropright-circle' size={50} color='#c3c3c3' style={{ backgroundColor: 'transparent',}} />
            </TouchableOpacity>
        </View>

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
        data={this.state.data} />

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
