import React from 'react';
import { Text, View, Image, Button, ScrollView } from 'react-native';
import axios from 'axios';
import { StackNavigator } from 'react-navigation';

import Pictures from './Pictures';
import Details from './Details';

export default class Dashboard extends React.Component {
  render() {
    return (
      <ModalStack />
    );
  }
}

export const navOptions = ({ navigation }) => ({
  headerStyle: {
    height: 40,
  },
  headerTitleStyle: {
    fontSize: 16,
  },
});

const ModalStack = StackNavigator({
  Pictures: {
    screen: Pictures,
    navigationOptions: navOptions,
  },
  Details: {
    path: 'posts/:id',
    screen: Details,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.post.title}` || 'Pictures',
      headerStyle: {
        height: 40,
      },
      headerTitleStyle: {
        fontSize: 16,
      },
    }),
  },
});
