import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class Saturday extends Component {
  goBack(){
    this.props.navigator.push({id: 'Friday'});
  }
  render() {
    return (
      <Text>I'm Saturday</Text>
    );
  }
}
module.exports = Saturday;
