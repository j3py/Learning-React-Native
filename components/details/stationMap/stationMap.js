'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MapView from 'react-native-maps';

export default class StationMap extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MapView
        style={ this.props.flipper }
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
};
