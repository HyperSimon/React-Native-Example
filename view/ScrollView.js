import React, { Component } from 'react';
import { Text, TextInput, View, ScrollView } from 'react-native';

// 就是 Android 里面的ScrollView, 效果基本一致
export default class ScrollViewDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <View>
        <ScrollView>
          <Text style={{ fontSize: 42 }}>this is a scrollview</Text>
          <Text style={{ fontSize: 42 }}>this is a scrollview</Text>
          <Text style={{ fontSize: 42 }}>this is a scrollview</Text>
          <Text style={{ fontSize: 42 }}>this is a scrollview</Text>
          <Text style={{ fontSize: 42 }}>this is a scrollview</Text>
          <Text style={{ fontSize: 42 }}>this is a scrollview</Text>
          <Text style={{ fontSize: 42 }}>this is a scrollview</Text>
          <Text style={{ fontSize: 42 }}>this is a scrollview</Text>
          <Text style={{ fontSize: 42 }}>this is a scrollview</Text>
          <Text style={{ fontSize: 42 }}>this is a scrollview</Text>
          <Text style={{ fontSize: 42 }}>this is a scrollview</Text>
          <Text style={{ fontSize: 42 }}>this is a scrollview</Text>
          <Text style={{ fontSize: 42 }}>this is a scrollview</Text>
          <Text style={{ fontSize: 42 }}>this is a scrollview</Text>
          <Text style={{ fontSize: 42 }}>this is a scrollview</Text>
          <Text style={{ fontSize: 42 }}>this is a scrollview</Text>
          <Text style={{ fontSize: 42 }}>this is a scrollview</Text>
          <Text style={{ fontSize: 42 }}>this is a scrollview</Text>
          <Text style={{ fontSize: 42 }}>this is a scrollview</Text>

          <Text>this is a scrollview</Text>
          <Text>this is a scrollview</Text>
          <Text>this is a scrollview</Text>
          <Text>this is a scrollview</Text>
          <Text>this is a scrollview</Text>
          <Text>this is a scrollview</Text>
          <Text>this is a scrollview</Text>
          <Text>this is a scrollview</Text>
          <Text>this is a scrollview</Text>
          <Text>this is a scrollview</Text>
          <Text>this is a scrollview</Text>
          <Text>this is a scrollview</Text>
          <Text>this is a scrollview</Text>
          <Text>this is a scrollview</Text>
          <Text>this is a scrollview</Text>
          <Text>this is a scrollview</Text>
          <Text>this is a scrollview</Text>
          <Text>this is a scrollview</Text>
          <Text>this is a scrollview</Text>
          <Text>this is a scrollview</Text>
          <Text>this is a scrollview</Text>
          <Text>this is a scrollview</Text>

        </ScrollView>
      </View>
    );
  }
}
