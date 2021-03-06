import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default ({navigator}) =>
      <View style={styles.container}>
        <Text style={styles.largeText}>
          Teacher Locator
        </Text>
        <TouchableHighlight style={styles.button} onPress={() => navigator.pop()}>
        <Text style={styles.buttonText}>Go Back To The Menu</Text>
        </TouchableHighlight>
      </View>

const styles = StyleSheet.create({
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
