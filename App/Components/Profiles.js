import React from 'react';
import { Text, View, Image, Button, ScrollView } from 'react-native';
import axios from 'axios';

export default class Profiles extends React.Component {
  static navigationOptions = {
    title: 'Profiles',
  };
  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate('Profile', { name: 'Lucy' })}
          title="Go to Lucy's profile"
        />
      </View>
    );
  }
}
