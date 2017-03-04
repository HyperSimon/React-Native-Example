import React, { Component } from 'react';
import { AppRegistry, Text, Image, View, StyleSheet } from 'react-native';

import JustifyFlexStart from './flex-start'
import AlignCenter from './center'
import JustifyFlexEnd from './flex-end'
import  AlignStretch from './stretch'


/**
 * Justify Content
 在组件的style中指定justifyContent可以决定其子元素沿着主轴的排列方式。子元素是应该靠近主轴的起始端还是末尾段分布呢？
 亦或应该均匀分布？对应的这些可选项有：
 flex-start、
 center、
 flex-end、
 space-around以及
 space-between。
 */
export default class AlignSummary extends Component {
  render() {
    return (
      <View style={  styles.container  }>

        <View style={  { flex: 1, backgroundColor: 'green' } }>
          <Text style={ styles.itemFont }>flex start</Text>
          <JustifyFlexStart></JustifyFlexStart>
        </View>

        <View style={  { flex: 1, backgroundColor: 'blue' } }>
          <Text style={ styles.itemFont }>align center</Text>
          <AlignCenter></AlignCenter>
        </View>

        <View style={  { flex: 1, backgroundColor: 'green' } }>
          <Text style={ styles.itemFont }>flex end</Text>
          <JustifyFlexEnd></JustifyFlexEnd>
        </View>

        <View style={  { flex: 1, backgroundColor: 'blue' } }>
          <Text style={ styles.itemFont }>stretch</Text>
          <AlignStretch></AlignStretch>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    flexDirection: 'column'
  },

  itemFont: {
    color: 'white'
  }
})
