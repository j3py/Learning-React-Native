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
    console.log('//// stations prop in Map', this.props.stations);
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

// const baseFontSize = 16;
// const styles = StyleSheet.create({
//   maps: {
//     position: 'absolute',
//     top: 50,
//     left: -90,
//     right: 0,
//     bottom: 0,
//     height: 300,
//     width: 300,
//     borderRadius: 10,
//     shadowColor: '#000000',
//     shadowOpacity: 1.0,
//     shadowRadius: 2,
//     shadowOffset: { height: 10, width: 5 }
//   },
// });
