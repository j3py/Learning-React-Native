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
      dataSource: ds.cloneWithRows(props.forecast.list),
      temp: new Animated.Value(50),
      hum: new Animated.Value(50),
      press: new Animated.Value(100)
    }
  }

  _handleAnimation() {
    const barTypes = ['temp', 'hum', 'press'];
    Animated.parallel(barTypes.map(type => {
      return Animated.timing(this.state[type], { toValue: this.state[type] });
    })).start();
  }

  render() {
    this._handleAnimation();
    return (
      <View style={ this.props.flipper }>
        <ListView
          dataSource={ this.state.dataSource }
          renderRow={ (data) =>
            <View style={styles.item}>
              <Text style={styles.label}>{ data.dt_txt }</Text>
              <Text style={styles.label}>{ data.weather.description }</Text>
              <Text style={styles.label}>Temperature</Text>
              <View style={styles.data}>
                <Animated.View style={[styles.bar, styles.points, {width: this.state.temp}]} />
                <Text style={styles.dataNumber}>{data.main.temp}</Text>
              </View>
              <Text style={styles.label}>Humidity</Text>
              <View style={styles.data}>
                <Animated.View style={[styles.bar, styles.points, {width: this.state.hum}]} />
                <Text style={styles.dataNumber}>{data.main.humidity}</Text>
              </View>
              <Text style={styles.label}>Pressure</Text>
              <View style={styles.data}>
                <Animated.View style={[styles.bar, styles.points, {width: this.state.press}]} />
                <Text style={styles.dataNumber}>{data.main.pressure}</Text>
              </View>
            </View>
          } />
      </View>
    );
  }
}
