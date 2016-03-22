'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MapView from 'react-native-maps';

export default class Map extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MapView
        style={styles.map }
        region={ this.props.loc }>
        { this.props.stations.map((marker, index) => (
          <MapView.Marker
            key={ index }
            coordinate={ { latitude: marker.station.coord.lat, longitude: marker.station.coord.lon } }
            title={ marker.station.name }
            description={ 'Distance: ' + marker.distance } />
        ))}
      </MapView>
    );
  }
}

const baseFontSize = 16;
const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 250,
    width: 250
  },
});
