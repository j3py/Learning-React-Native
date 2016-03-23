'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ForecastChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('//// chart props', JSON.stringify(this.props.forecast));
    return (
      <View style={ styles.forecastContainer }>
        <Text style={ styles.bigText }>
          { JSON.stringify(this.props.forecast) }
        </Text>
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
