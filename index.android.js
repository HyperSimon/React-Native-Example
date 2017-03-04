/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'

import JustifySummary from './view/justify/justify-summary'

// 后面的属性会覆盖前面的同名属性，以此可以达到继承的目的
class MainView extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <JustifySummary />
      </View>
    );
  }
}


// 注册应用(registerComponent)后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('AwesomeProject', () => MainView);
