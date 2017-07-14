import React from 'react';
import { View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }

  // onRegionChange(region) {
  //   this.setState({ region });
  // }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={this.state.region}
          // onRegionChange={this.onRegionChange}
        />
      </View>
    );
  }
}

const styles = {
  // container: {
  //   flex: 1,
  //   width: Dimensions.get('window').width,
  //   height: Dimensions.get('window').height,
  // },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
};
