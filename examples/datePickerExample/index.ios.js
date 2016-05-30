/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import DatePicker from './date-picker';

class datePickerExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DatePicker
          initialDate={(new Date('1992-12-16T00:00:00')).getTime()}
          minDate={(new Date('1900-01-01T00:00:00')).getTime()}
          maxDate={(new Date()).getTime()}
          onDateChange={date => console.warn('DATE', date)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('datePickerExample', () => datePickerExample);
