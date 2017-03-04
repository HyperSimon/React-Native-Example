import React, { Component } from 'react';
import { AppRegistry, Text, Image, View } from 'react-native';

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
export default class AlignCenter extends Component {
  render() {
    return (
      <View style={ {
        flex: 1,
        flexDirection: 'row', // 决定改控件的排列方式，row -> 水平排列 ( a | b  ) ， column -> 垂直排列
      } }>

        <View style={ {
          flex: 1,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center', /*可以决定其子元素沿着次轴（与主轴垂直的轴，比如若主轴方向为row，则次轴方向为column）的排列方式。*/
        } }>
          <View style={{ width: 35, height: 35, backgroundColor: 'powderblue' }}/>
          <View style={{ width: 35, height: 35, backgroundColor: 'black' }}>
            <Text style={{ color: 'white' }}>Row</Text>
          </View>
          <View style={{ width: 35, height: 35, backgroundColor: 'red' }}/>
        </View>

        <View style={ {
          flex: 1,
          backgroundColor: 'purple',
          flexDirection: 'column', // 决定改控件的排列方式，row -> 水平排列， column -> 垂直排列
          alignItems: 'center' // 决定了该空间在父控件的位置
        } }>
          <View style={{ width: 35, height: 35, backgroundColor: 'powderblue' }}/>
          <View style={{ width: 35, height: 35, backgroundColor: 'black' }}>
            <Text style={{ color: 'white' }}>Column</Text>
          </View>
          <View style={{ width: 35, height: 35, backgroundColor: 'red' }}/>
        </View>
      </View>
    );
  }
}
