import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import Index from './App/index';

export default class App extends React.Component {
  render() {
    return (
      <Index />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// import React from 'react';
// import { AppRegistry, StyleSheet, Text, View } from 'react-native';
// import { TabNavigator } from 'react-navigation';
//
// class RecentChatsScreen extends React.Component {
//   render() {
//     return <Text>List of recent chats</Text>;
//   }
// }
//
// class AllContactsScreen extends React.Component {
//   render() {
//     return <Text>List of all contacts</Text>;
//   }
// }
//
// const MainScreenNavigator = TabNavigator({
//   Recent: { screen: RecentChatsScreen },
//   All: { screen: AllContactsScreen },
// });
//
// export default class App extends React.Component {
//   render() {
//     return (
//       <MainScreenNavigator />
//     );
//   }
// }
