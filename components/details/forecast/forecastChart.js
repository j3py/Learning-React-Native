'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  Animated
} from 'react-native';
import { styles } from '../../styles/details/forecast/forecastChartStyles';

export default class ForecastChart extends Component {
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.forecast.list)
    }
  }

  _handleAnimation(data) {
    let temp = new Animated.Value(0.00);
    let humidity = new Animated.Value(0.00);
    let pressure = new Animated.Value(0.00);
    const barTypes = [temp, humidity, pressure];
    const stringTypes = ['temp', 'humidity', 'pressure'];

    Animated.parallel(barTypes.map((type, index) => (
      Animated.timing(type, {
        toValue:
          (index === 2)?
          (data.main[stringTypes[index]]/7).toFixed(2):
          data.main[stringTypes[index]],
        duration: 2000
      })
    ))).start();

    return (
      <View style={styles.item}>
        <Text style={styles.label}>{ data.dt_txt }</Text>
        <Text style={styles.label}>{ data.weather.description }</Text>
        <Text style={styles.label}>Temperature</Text>
        <View style={styles.data}>
          <Animated.View style={[styles.bar, styles.points, { width: temp }]} />
          <Text style={styles.dataNumber}>{data.main.temp}°F</Text>
        </View>
        <Text style={styles.label}>Humidity</Text>
        <View style={styles.data}>
          <Animated.View style={[styles.bar, styles.points, { width: humidity }]} />
          <Text style={styles.dataNumber}>{data.main.humidity}%</Text>
        </View>
        <Text style={styles.label}>Pressure</Text>
        <View style={styles.data}>
          <Animated.View style={[styles.bar, styles.points, { width: pressure }]} />
          <Text style={styles.dataNumber}>{data.main.pressure}mb</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={ this.props.flipper }>
        <ListView
          dataSource={ this.state.dataSource }
          renderRow={ this._handleAnimation.bind(this) } />
      </View>
    );
  }
}
