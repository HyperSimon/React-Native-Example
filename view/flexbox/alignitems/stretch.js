import React, { Component } from 'react';
import { AppRegistry, Text, Image, View } from 'react-native';

/**
 注意：要使stretch选项生效的话，子元素在次轴方向上不能有固定的尺寸。以下面的代码为例：只有将子元素样式中的width: 50去掉之后，alignItems: 'stretch'才能生效。
 */
export default class AlignFlexEnd extends Component {
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
          alignItems: 'stretch', /*可以决定其子元素沿着次轴（与主轴垂直的轴，比如若主轴方向为row，则次轴方向为column）的排列方式。*/
        } }>
          <View style={{ backgroundColor: 'powderblue' }}/>
          <View style={{ backgroundColor: 'black' }}>
            <Text style={{ color: 'white' }}>Row</Text>
          </View>
          <View style={{ backgroundColor: 'red' }}/>
        </View>

        <View style={ {
          flex: 1,
          backgroundColor: 'purple',
          flexDirection: 'column', // 决定改控件的排列方式，row -> 水平排列， column -> 垂直排列
          alignItems: 'stretch' // 决定了该空间在父控件的位置
        } }>
          <View style={{ backgroundColor: 'powderblue' }}/>
          <View style={{ backgroundColor: 'black' }}>
            <Text style={{ color: 'white' }}>Column</Text>
          </View>
          <View style={{ backgroundColor: 'red' }}/>
        </View>
      </View>
    );
  }
}
