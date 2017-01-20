import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Navigator } from 'react-native';
import First from './app/First';
import Second from './app/Second';
import Third from './app/Third';

export default class iClass extends Component {
  navigatorRenderScene(route, navigator) {
    switch (route.id) {
      case 'First':
      return <First navigator={navigator} />
      case 'Second':
      return <Second navigator={navigator} />
      case 'Third':
      return <Third navigator={navigator} />
    }
  }
  render() {
    return (
      <Navigator initialRoute={{id: 'First'}} renderScene={this.navigatorRenderScene} />
    );
  }
}
AppRegistry.registerComponent('iClass', () => iClass);
