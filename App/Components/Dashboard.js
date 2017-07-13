import React from 'react';
import { Text, View, Image, Button, ScrollView } from 'react-native';
import axios from 'axios';
import { StackNavigator } from 'react-navigation';

import { navOptions } from './Home';

import Profile from './Profile';
import Profiles from './Profiles';

export default class Dashboard extends React.Component {
  render() {
    return (
      <ModalStack />
    );
  }
}

const ModalStack = StackNavigator({
  Profiles: {
    screen: Profiles,
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
});
