import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class First extends Component {
  onButtonPress(id){
    this.props.navigator.push({id: id});
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.largeText}>This Is The First Scene.</Text>

        <TouchableHighlight style={styles.button} onPress={() => this.onButtonPress('Second')}>
        <Text style={styles.buttonText}>Go To The Second Scene.</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button} onPress={() => this.onButtonPress('Third')}>
        <Text style={styles.buttonText}>Go To The Third Scene.</Text>
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
    color: '#fae596'
  }
});
module.exports = First;
