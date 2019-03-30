import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { ScrollView, StyleSheet } from 'react-native';

export default class TestingScreen extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // paddingTop: 15,
      backgroundColor: '#ffd05e',
    },
  });

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => TestingScreen);
