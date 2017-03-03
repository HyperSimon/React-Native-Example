/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry,StyleSheet,  Text, View } from 'react-native';

import Bananas from './view/bananes'

// 后面的属性会覆盖前面的同名属性，以此可以达到继承的目的
class MainView extends Component {
    render() {
        return (
            // 注意 多个样式的时候是一个数组
             <View>
                <Text style={styles.nameTextView}>Hello world!</Text>
                <Text style={styles.bigblue}>Hello world!</Text>  
                <Text style={[styles.bigblue, styles.red]}>Hello world!</Text>
                <Text style={[styles.red, styles.bigblue]}>Hello world!</Text>

                <Bananas></Bananas>
             </View>
                
       );
    }
}

const styles = StyleSheet.create({
    bigblue : {
        color : 'blue',
        fontWeight : 'bold',
        fontSize : 30
    },

    nameTextView : {
        backgroundColor: 'red',
        color : 'white',
        width : 200,
        fontSize :80,
        height: 300
       
    },
    
    red:{
        color : 'red'
    }
})


// 注册应用(registerComponent)后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('AwesomeProject', () => MainView);
