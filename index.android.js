/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry,StyleSheet,  Text, View } from 'react-native';


// 后面的属性会覆盖前面的同名属性，以此可以达到继承的目的
class MainView extends Component {
    render() {
        return (
            // 注意 多个样式的时候是一个数组
             <View>
                <Text style={styles.red}>Hello world!</Text>
                <Text style={styles.bigblue}>Hello world!</Text>  
                <Text style={[styles.bigblue, styles.red]}>Hello world!</Text> // 颜色被覆盖，其余继承
                <Text style={[styles.red, styles.bigblue]}>Hello world!</Text> // 同上
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
    red:{
        color : 'red'
    }
})

AppRegistry.registerComponent('AwesomeProject', () => MainView);
