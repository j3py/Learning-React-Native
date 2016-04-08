'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import ForecastChart from './forecast/forecastChart';
import ForecastList from './forecast/forecastList';
import StationMap from './stationMap/stationMap';
import { styles } from '../styles/details/detailStyles';

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strings: ['5-day list', '5-day chart', 'Station map'],
      booleans: [true, false, false],
      options: false
    }
  }

  _handleMFPress(index) {
    let array = [false, false, false];
    array[index] = true;
    this.setState({
      booleans: array,
      options: false
    });
  }

  _handleOptionsPress() {
    this.setState({
      options: true
    });
  }

  render() {
    let btns = [styles.leftBtn, styles.rightBtn, styles.centerBtn];
    let current = this.state.booleans.indexOf(true);

    return (
      <View style={ styles.forecastContainer }>
        { (this.state.booleans[0] === true) ?
          <View>
            <ForecastList
              flipper={ [styles.flipper, this.state.options?styles.optionsOverlay:null] }
              forecast={ this.props.forecast } />
            <Text style={ styles.bottomTxt }>
              { this.state.strings[0] }
            </Text>
          </View> : null }

        { (this.state.booleans[1] === true) ?
          <View>
            <ForecastChart
              flipper={ [styles.flipper, this.state.options?styles.optionsOverlay:null] }
              forecast={ this.props.forecast } />
            <Text style={ styles.bottomTxt }>
              { this.state.strings[1] }
            </Text>
          </View> : null }

        { (this.state.booleans[2] === true) ?
          <View>
            <StationMap
              flipper={ [styles.flipper, this.state.options?styles.optionsOverlay:null] }
              loc={ this.props.loc }
              stations={ this.props.stations } />
            <Text style={ styles.bottomTxt }>
              { this.state.strings[2] }
            </Text>
          </View> : null }

        <TouchableHighlight onPress={ this._handleOptionsPress.bind(this) } >
          <Text style={ styles.bottomBtn } >
            Detail options
          </Text>
        </TouchableHighlight>

        { this.state.options ?
          <View>
            { this.state.booleans.map((bool, index) => (
              <View
                key={ index }
                style={ btns[index] }>
                <TouchableHighlight onPress={ this._handleMFPress.bind(this, index) } >
                  <Text>
                    { bool ? ('Back to ' + this.state.strings[index]) :
                      this.state.strings[index] }
                  </Text>
                </TouchableHighlight>
              </View>
            ))}
          </View> :
        null }
      </View>
    );
  }
}
