import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';

import { TabNavigator } from 'react-navigation';

import Dashboard from './Components/Dashboard';
import Details from './Components/Details';

class RecentChatsScreen extends React.Component {
  render() {
    return <Text>List of recent chats</Text>;
  }
}

class AllContactsScreen extends React.Component {
  render() {
    return <Text>List of all contacts</Text>;
  }
}

const MainScreenNavigator = TabNavigator({
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
      <MainScreenNavigator />
    );
  }
}
