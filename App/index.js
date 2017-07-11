import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';

import { TabNavigator } from 'react-navigation';

import Dashboard from './Components/Dashboard';
import Details from './Components/Details';

const ScreenNavigator = TabNavigator({
  Dashboard: { screen: Dashboard },
  Details: { screen: Details },
});

export default class Index extends React.Component {
  // static navigationOptions =  ({ navigation }) => ({
  //   title: 'Bundles',
  //   headerRight: <Text onPress={ () => { navigation.navigate('ToSomeRoute'); } }>Click Me</Text>,
  // });
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    return (
      <ScreenNavigator />
    );
  }
}
