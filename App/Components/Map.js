import React from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 6.0922,
        longitudeDelta: 6.0421,
      },
      markers: [
        {
          latlng: {
            latitude: 37.78825,
            longitude: -122.4324,
          },
        },
        {
          latlng: {
            latitude: 37.98825,
            longitude: -121.4324,
          },
        },
      ],
    };
    this.onRegionChange = this.onRegionChange.bind(this);
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    const lat = this.state.region.latitude.toString().slice(0, 6);
    const lng = this.state.region.longitude.toString().slice(0, 6);
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={this.state.region}
          onRegionChange={this.onRegionChange}
      >
        {this.state.markers.map(marker => (
          <MapView.Marker
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
            key={marker.latlng.latitude}
          />
        ))}
      </MapView>
      <View style={styles.info}>
        <Text>{`${lat}, ${lng}`}</Text>
      </View>
      </View>
    );
  }
}

const styles = {
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
  info: {
    width: 110,
    height: 30,
    backgroundColor: 'rgba(14, 159, 159, 0.26)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
};
