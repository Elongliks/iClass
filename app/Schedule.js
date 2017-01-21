import React, { Component } from 'react';
import { StyleSheet, Text, Navigator, TouchableHighlight } from 'react-native';

export default class Schedule extends Component {
  getInitialRoute(){
    var date = new Date()
    return date.getDay()
  }
    render() {
      const routes = [
      {title: 'Sunday', index: 0},
      {title: 'Monday', index: 1},
      {title: 'Tuesday', index: 2},
      {title: 'Wednesday', index: 3},
      {title: 'Thursday', index: 4},
      {title: 'Friday', index: 5},
    ];
    return (
      <Navigator
        initialRoute={routes[this.getInitialRoute()]}
        initialRouteStack={routes}
        configureScene={(route, routeStack) => Navigator.SceneConfigs.SwipeFromLeft}
        renderScene={(route, navigator) =>
          <TouchableHighlight>
          <Text>Hello {route.title}!</Text>
          </TouchableHighlight>
        }
      />
    );
  }
}
const styles = StyleSheet.create ({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#dddfd4'
    },
    largeText: {
      flex: 2,
      fontSize: 52,
      fontFamily: 'HelveticaNeue-CondensedBold',
      paddingTop: 40,
      paddingRight: 20,
      paddingLeft: 20,
      color: '#173e43'
    },
    button: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'stretch',
      backgroundColor: '#3fb0ac'
    },
    buttonText: {
      fontFamily: 'HelveticaNeue-CondensedBold',
      fontSize: 32,
      color: '#fae596'
    }
  });
