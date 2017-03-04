
import React, { Component } from 'react';
import { AppRegistry, Text, Image, View } from 'react-native';

export default class FlexDirectionBasic extends Component {
    render() {
        
        return (
            <View style={ {flex :1 , flexDirection : 'row'} }>
                
                <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}/>
                <View style={{ width: 50, height: 50, backgroundColor: 'red' }}/> 
                <View style={{ width: 50, height: 50, backgroundColor: 'blue' }}/> 
                <View style={{ width: 50, height: 50, backgroundColor: 'purple' }}/>
  
                <View style={{ width: 50, height: 50, backgroundColor: 'black' }}/> 
                  <View style={{ width: 50, height: 50, backgroundColor: 'red' }}/> 


                <View style={{ flexDirection : 'column'  }}>
                <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }}/> 
                <View style={{ width: 50, height: 50, backgroundColor: 'black' }}/> 
 
                </View>
            </View>
        );
    }
}



