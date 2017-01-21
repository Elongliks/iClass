import React, { Component } from 'react';
import { StyleSheet, Text, Navigator } from 'react-native';
import Sunday from './Schedule/Sunday';
import Monday from './Schedule/Monday';
import Tuesday from './Schedule/Tuesday';
import Wednesday from './Schedule/Wednesday';
import Thursday from './Schedule/Thursday';
import Friday from './Schedule/Friday';
import Saturday from './Schedule/Saturday';

class Schedule extends Component {
  navigatorRenderScene(route, navigator) {
    switch (route.id) {
      case 'Sunday':
      return <Sunday navigator={navigator} />
      case 'Monday':
      return <Monday navigator={navigator} />
      case 'Tuesday':
      return <Tuesday navigator={navigator} />
      case 'Wednesday':
      return <Wednesday navigator={navigator} />
      case 'Thursday':
      return <Thursday navigator={navigator} />
      case 'Friday':
      return <Friday navigator={navigator} />
      case 'Saturday':
      return <Saturday navigator={navigator} />
    }
  }
  getInitial(){
    var date = new Date();
    switch (date.getDay()){
      case 0:
      return 'Sunday';
      case 1:
      return 'Monday';
      case 2:
      return 'Tuesday';
      case 3:
      return 'Wednesday';
      case 4:
      return 'Thursday';
      case 5:
      return 'Friday';
      case 6:
      return 'Saturday';
    }
  }
  render() {
    return (
      <Navigator initialRoute={{id: this.getInitial()}} renderScene={this.navigatorRenderScene} />
    );
  }
}
module.exports = Schedule;
