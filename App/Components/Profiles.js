import React from 'react';
import { Text, View, Image, Button, ScrollView, TouchableHighlight } from 'react-native';
import axios from 'axios';

export default class Profiles extends React.Component {
  static navigationOptions = {
    title: 'Profiles',
  };
  render() {
    return (
      <View>
        <ScrollView>
        <Button
          onPress={() => this.props.navigation.navigate('Profile', { name: 'Lucy' })}
          title="Go to Lucy's profile"
        />
        <View
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
          }}
          >
          <ScrollView horizontal={true}>
          <TouchableHighlight>
            <View
              style={{
                height: 300,
                width: 300,
                backgroundColor: 'pink',
                margin: 10,
              }}
              ></View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View
              style={{
                height: 300,
                width: 300,
                backgroundColor: 'pink',
                margin: 10,
              }}
              ></View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View
              style={{
                height: 300,
                width: 300,
                backgroundColor: 'pink',
                margin: 10,
              }}
              ></View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View
              style={{
                height: 300,
                width: 300,
                backgroundColor: 'pink',
                margin: 10,
              }}
              ></View>
          </TouchableHighlight>
          </ScrollView>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
        <TouchableHighlight>
          <View
            style={{
              height: 300,
              width: 300,
              backgroundColor: 'pink',
              margin: 10,
            }}
            ></View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View
            style={{
              height: 300,
              width: 300,
              backgroundColor: 'pink',
              margin: 10,
            }}
            ></View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View
            style={{
              height: 300,
              width: 300,
              backgroundColor: 'pink',
              margin: 10,
            }}
            ></View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View
            style={{
              height: 300,
              width: 300,
              backgroundColor: 'pink',
              margin: 10,
            }}
            ></View>
        </TouchableHighlight>
        </View>
      </ScrollView>
      </View>
    );
  }
}
