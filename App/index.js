import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';

import { TabNavigator } from 'react-navigation';

import Home from './Components/Home';
import Dashboard from './Components/Dashboard';

const ScreenNavigator = TabNavigator({
  Home: { screen: Home },
  Dashboard: { screen: Dashboard },
}, {
  //tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#2699ed',
    inactiveTintColor: '#1366a2',
    //scrollEnabled: true,
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: '#fff',
      height: 36,
      marginTop: 25,
    },
    labelStyle: {
      paddingTop: 0,
      marginTop: 0,
    },
    indicatorStyle: {
      backgroundColor: '#092a3e',
      height: 1,
    },
  },
});

export default class Index extends React.Component {
  constructor() {
    super();
    StatusBar.setHidden(false);
  }

  render() {
    return (
      <ScreenNavigator style={{ paddingTop: 90 }}/>
    );
  }
}
