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
    console.log('//// data source', this.props.forecast);
    return (
      <View style={ styles.forecastContainer }>
        <ListView
          dataSource={ this.state.dataSource }
          renderRow={ (data) =>
            <Text style={ styles.bigText }>
              { JSON.stringify(data) }
            </Text>
          } />
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
