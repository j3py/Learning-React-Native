'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  MapView
} from 'react-native';

export default class Map extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('//// map component loc', this.props.loc);
    var markers = [
      {
        latitude: this.props.stations[0].station.coord.lat,
        longitude: this.props.stations[0].station.coord.lon,
        title: this.props.stations[0].station.name,
        subtitle: "Distance: " + this.props.stations[0].distance
      }
    ];

    return (
      <MapView
        style={styles.map}
        region={ this.props.loc }
        mapType={ 'standard' }
        annotations={ markers }
        overlays={ [{ coordinates: [this.props.loc] }] } />
    );
  }
}

const baseFontSize = 16;
const styles = StyleSheet.create({
  map: {
    height: 150,
    margin: 10,
    borderWidth: 1,
    borderColor: '#000000',
  },
});
