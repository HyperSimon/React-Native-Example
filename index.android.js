/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry,StyleSheet,  Text, View } from 'react-native'

import FlexDirectionBasic from './view/flexbox.js'

// 后面的属性会覆盖前面的同名属性，以此可以达到继承的目的
class MainView extends Component {
    render() {
        return (
            // 注意 多个样式的时候是一个数组
             <View style={  styles.container  }>
                <FlexDirectionBasic></FlexDirectionBasic>
             </View>
                
       );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },

})


// 注册应用(registerComponent)后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('AwesomeProject', () => MainView);
