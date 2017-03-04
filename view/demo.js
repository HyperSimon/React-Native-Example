import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import Bananas from './view/bananes'
import FlexDimensionsBasics from './view/fles'

class Demo extends Component {
  render() {
    return (
      <view>
        <Text style={[styles.nameTextView]}>Hello world!</Text>
        <Text style={[styles.bigblue]}>Hello world!</Text>
        <Text style={[styles.bigblue, styles.red]}>Hello world!</Text>
        <Text style={[styles.red, styles.bigblue]}>Hello world!</Text>
        <Bananas style={{ flex: 1 }}></Bananas>
      </view>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },

  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    flex: 2
  },

  nameTextView: {
    backgroundColor: 'red',
    color: 'white',
    width: 100,
    fontSize: 30,
    height: 100,
    flex: 4

  },

  red: {
    color: 'red'
  }
})
