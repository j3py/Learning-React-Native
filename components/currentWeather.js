'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { styles } from './styles/currentWeatherStyles';

export default class CurrentWeather extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={ styles.forecastContainer }>
        <Text style={ styles.bigText }>
          { this.props.current.main }
        </Text>
        <Text style={ this.props.mainText }>
          { this.props.flavor2 }: { this.props.current.description }
        </Text>
        <Text style={ styles.bigText }>
          { this.props.current.temp }°F
        </Text>
      </View>
    );
  }
}
