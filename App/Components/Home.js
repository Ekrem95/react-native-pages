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

const ModalStack = StackNavigator({
  Pictures: {
    screen: Pictures,
  },
  Details: {
    path: 'posts/:id',
    screen: Details,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.post.title}`,
    }),
  },
});
