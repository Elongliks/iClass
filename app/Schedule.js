import React, { Component } from 'react';
import { StyleSheet, Text, Navigator } from 'react-native';

export default class Schedule extends Component {
  
    render() {
    return (
      <Text>Hey</Text>
    )
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
