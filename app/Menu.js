import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class Menu extends Component {
  onButtonPress(id){
    this.props.navigator.push({id: id});
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.largeText}>
        iClass
        </Text>

        <TouchableHighlight style={styles.button} onPress={() => this.onButtonPress('Session')}>
        <Text style={styles.buttonText}>My Class</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button} onPress={() => this.onButtonPress('Schedule')}>
        <Text style={styles.buttonText}>Schedule Changes</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button} onPress={() => this.onButtonPress('Teacher')}>
        <Text style={styles.buttonText}>Teacher Locator</Text>
        </TouchableHighlight>

      </View>
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
module.exports = Menu;
