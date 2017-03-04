import React, { Component } from 'react';
import { AppRegistry, Text, Image, View } from 'react-native';


// 在组件的style中指定justifyContent可以决定其子元素沿着主轴的排列方式。子元素是应该靠近主轴的起始端还是末尾段分布呢？亦或应该均匀分布？对应的这些可选项有：flex-start、center、flex-end、space-around以及space-between。

export default class FlexDirectionBasic extends Component {
  render() {
    return (
      <View style={ {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      } }>

        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}/>
        <View style={{ width: 50, height: 50, backgroundColor: 'red' }}/>
        <View style={{ width: 50, height: 50, backgroundColor: 'blue' }}/>
        <View style={{ width: 50, height: 50, backgroundColor: 'purple' }}/>

        <View style={{ width: 50, height: 50, backgroundColor: 'black' }}/>
        <View style={{ width: 50, height: 50, backgroundColor: 'red' }}/>

        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }}/>
          <View style={{ width: 50, height: 50, backgroundColor: 'black' }}/>
        </View>
      </View>
    );
  }
}
