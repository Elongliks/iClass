import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Navigator } from 'react-native';
import Menu from './app/Menu';
import Schedule from './app/Schedule';
import Teacher from './app/Teacher';
import Session from './app/Session'

export default class iClass extends Component {
  navigatorRenderScene(route, navigator) {
    switch (route.id) {
      case 'Menu':
      return <Menu navigator={navigator} />
      case 'Schedule':
      return <Schedule navigator={navigator} />
      case 'Teacher':
      return <Teacher navigator={navigator} />
      case 'Session':
      return <Session navigator={navigator} />
    }
  }
  render() {
    return (
      <Navigator initialRoute={{id: 'Menu'}} renderScene={this.navigatorRenderScene} />
    );
  }
}
AppRegistry.registerComponent('iClass', () => iClass);
