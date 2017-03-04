import React , { Component } from 'react'
import { AppRegistry, Text, View } from 'react-native'

export default class FlexDimensionsBasics extends Component{
    render(){
        return (
                <View style={ {flex : 1}  }>
                <View style={ {flex : 1}  }>
                <Text>what your name?</Text>
                </View>
                <View style={ {flex : 1}  }></View>
                <View style={ {flex : 1}  }></View>
                <View style={ {flex : 1}  }></View>
                </View>
        )
    };
}

