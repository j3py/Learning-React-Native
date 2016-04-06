'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import ForecastChart from './forecastChart';
import ForecastList from './forecastList';

export default class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecastChartState: null,
      forecastListState: null
    }
  }

  _handleForecastChartPress() {
    this.setState({
      forecastChartState:
        <ForecastChart
          forecast={ this.props.forecast } />
    });
  }

  _handleForecastListPress() {
    this.setState({
      forecastListState:
        <ForecastList
          forecast={ this.props.forecast } />
    });
  }

  render() {
    return (
      <View style={ styles.forecastContainer }>
        <TouchableHighlight onPress={ this._handleForecastChartPress.bind(this) }>
          <Text style={ this.props.button }>
            Chart view
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={ this._handleForecastListPress.bind(this) }>
          <Text style={ this.props.button }>
            List view
          </Text>
        </TouchableHighlight>
        { this.state.forecastChartState }
        { this.state.forecastListState }
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
