import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { TabNavigator } from 'react-navigation';

import Home from './Components/Home';
import Dashboard from './Components/Dashboard';

const ScreenNavigator = TabNavigator({
  Home: { screen: Home },
  Dashboard: { screen: Dashboard },
});

export default class Index extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    return (
      <ScreenNavigator />
    );
  }
}
