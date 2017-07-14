import React from 'react';
import { Text, View, Image, Button, ScrollView } from 'react-native';

export default class Profile extends React.Component {
  render() {
    const name = this.props.navigation.state.params.name;
    return (
      <View>
        <Text>Chat with {name}</Text>
      </View>
    );
  }
}
