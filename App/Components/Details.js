import React from 'react';
import { Text, View } from 'react-native';

export default class Details extends React.Component {

  render() {
    const { params } = this.props.navigation.state;
    return (
      <Text>Chat with {params}</Text>
    );
  }
}
