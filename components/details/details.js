'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import Forecast from './forecast/forecast';
import Map from './map/map';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.forecast = null;
    this.map = null;
  }

  _handleForecastPress() {
    this.map ?
    this.map =
      <Map
        loc={ this.props.loc }
        stations={ this.props.stations } /> :
    null;
  }

  _handleMapPress() {
    this.forecast ?
    this.forecast =
      <Forecast
        button={ styles.button }
        forecast={ this.props.forecast } /> :
    null;
  }

  render() {
    return (
      <View style={ styles.forecastContainer }>
        <Text style={ styles.bigText }>
          { JSON.stringify(this.props.forecast) }
          { JSON.stringify(this.props.stations) }
        </Text>
        <TouchableHighlight onPress={ this._handleForecastPress.bind(this) } >
          <Text style={ this.props.button }>
            5-day forecast
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={ this._handleMapPress.bind(this) } >
          <Text style={ this.props.button }>
            Station map
          </Text>
        </TouchableHighlight>
        { this.forecast }
        { this.map }
      </View>
    );
  }
}

const baseFontSize = 16;
const styles = StyleSheet.create({
  forecastContainer: {
    alignItems: 'center'
  },
  bigText: {
    flex: 2,
    fontSize: baseFontSize + 4,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  }
});
