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
    return (
      <MapView
        style={styles.map}
        region={ this.props.loc } />
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
