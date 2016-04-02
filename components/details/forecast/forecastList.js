'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

export default class ForecastList extends Component {
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.forecast.list)
    }
  }

  render() {
    console.log('/ forecast list - deepest component reached');
    return (
      <View style={ [styles.forecastContainer, this.props.flipper] }>
        <ListView
          dataSource={ this.state.dataSource }
          renderRow={ (data) =>
            <View style={ styles.border }>
              <Text style={ styles.bigText }>{ data.dt_txt }</Text>
              <Text style={ styles.bigText }>{ data.weather[0].description }</Text>
              <Text style={ styles.smallText }>
                Temp: {data.main.temp} Hum: {data.main.humidity} Press: {data.main.pressure}
              </Text>
            </View>
          } />
      </View>
    );
  }
}

const baseFontSize = 16;
const styles = StyleSheet.create({
  forecastContainer: {
    flex: 1,
    alignItems: 'center'
  },
  bigText: {
    flex: 2,
    fontSize: baseFontSize + 4,
    textAlign: 'left',
    margin: 10,
    color: '#FFFFFF'
  },
  smallText: {
    flex: 2,
    fontSize: baseFontSize - 4,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  },
  border: {
    flex: 1,
    overflow: 'hidden',
    borderBottomColor: 'white',
    borderBottomWidth: 3
  }
});
