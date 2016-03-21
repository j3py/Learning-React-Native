'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class Forecast extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={ styles.forecastContainer }>
        <Text style={ styles.bigText }>
          { JSON.stringify(this.props.forecast) }
        </Text>
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
