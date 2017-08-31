import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert,
  Modal,
  TouchableHighlight
} from 'react-native';

export default class Results extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <Text>Hellloo</Text>
        <Text>Hellloo</Text>
        <Text>Hellloo</Text>
        <Text>Hellloo</Text>
      </View>
    );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
