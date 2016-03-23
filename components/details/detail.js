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

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecastState: null,
      mapState: null
    }
  }

  _handleForecastPress() {
    this.setState({
      forecastState:
        <Forecast
          button={ this.props.button }
          forecast={ this.props.forecast } />
    });
  }

  _handleMapPress() {
    this.setState({
      mapState:
        <Map
          loc={ this.props.loc }
          stations={ this.props.stations } />
    });
  }

  render() {
    return (
      <View style={ styles.forecastContainer }>
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
        { this.state.forecastState }
        { this.state.mapState }
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
