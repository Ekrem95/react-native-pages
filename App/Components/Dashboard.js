import React from 'react';
import { Text, View, Image, Button, ScrollView } from 'react-native';
import axios from 'axios';
import { StackNavigator } from 'react-navigation';

import { navOptions } from './Home';

import Profile from './Profile';
import Scenes from './Scenes';
import Map from './Map';
import News from './News';

export default class Dashboard extends React.Component {
  render() {
    return (
      <ModalStack />
    );
  }
}

const ModalStack = StackNavigator({
  Scenes: {
    screen: Scenes,
    navigationOptions: navOptions,
  },
  Profile: {
    path: 'people/:name',
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}'s Profile`,
      headerStyle: {
        height: 40,
      },
      headerTitleStyle: {
        fontSize: 16,
      },
    }),
  },
  Map: {
    screen: Map,
    navigationOptions: ({ navigation }) => ({
      title: `Map`,
      headerStyle: {
        height: 40,
      },
      headerTitleStyle: {
        fontSize: 16,
      },
    }),
  },
  News: {
    screen: News,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.article.title}`,
      headerStyle: {
        height: 40,
      },
      headerTitleStyle: {
        fontSize: 16,
      },
    }),
  },
});
