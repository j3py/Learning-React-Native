'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Details extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={ styles.forecastContainer }>
        <Text style={ styles.bigText }>
          { JSON.stringify(this.props.forecast) }
          { JSON.stringify(this.props.stations) }
        </Text>
        <TouchableHighlight onPress={ this._handleForecastClick.bind(this) }>
          <Text style={ this.props.button }>
            Details
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={ this._handleForecastClick.bind(this) }>
          <Text style={ this.props.button }>
            Details
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
