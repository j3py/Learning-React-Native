'use strict';
import React, {
  Component,
  View,
} from 'react-native';
import MapMarker from './mapMarkerMock';

export default class MapView extends Component {
  constructor(props) {
    super(props);
    this.Marker = MapMarker;
  }

  render() {
    return (
      <View/>
    );
  }
};
