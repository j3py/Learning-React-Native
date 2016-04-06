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

    console.log('// booleans', this.state.booleans);

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

const baseFontSize = 16;
const styles = StyleSheet.create({
  forecastContainer: {
    alignItems: 'center'
  },
  optionsOverlay: {
    opacity: 0.6,
  },
  bigText: {
    flex: 2,
    fontSize: baseFontSize + 4,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
  flipper: {
    position: 'absolute',
    top: 10,
    left: -150,
    right: 0,
    bottom: 0,
    height: 340,
    width: 300,
    backgroundColor: 'orange',
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOpacity: 1.0,
    shadowRadius: 2,
    shadowOffset: { height: 10, width: 5 }
  },
  leftBtn: {
    position: 'absolute',
    top: 120,
    left: -165,
    right: 0,
    bottom: 0,
    height: 60,
    width: 60,
    backgroundColor: 'orange',
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOpacity: 1.0,
    shadowRadius: 2,
    shadowOffset: { height: 10, width: 5 }
  },
  rightBtn: {
    position: 'absolute',
    top: 120,
    left: 105,
    right: 0,
    bottom: 0,
    height: 60,
    width: 60,
    backgroundColor: 'orange',
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOpacity: 1.0,
    shadowRadius: 2,
    shadowOffset: { height: 10, width: 5 }
  },
  centerBtn: {
    position: 'absolute',
    top: 120,
    left: -30,
    right: 0,
    bottom: 0,
    height: 60,
    width: 60,
    backgroundColor: 'orange',
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOpacity: 1.0,
    shadowRadius: 2,
    shadowOffset: { height: 10, width: 5 }
  },
  bottomTxt: {
    position: 'absolute',
    top: 360,
    left: -95,
    right: 0,
    bottom: 0,
    height: 30,
    width: 90,
    color: '#FFFFFF',
    backgroundColor: 'orange',
    textAlign: 'center',
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOpacity: 1.0,
    shadowRadius: 2,
    shadowOffset: { height: 10, width: 5 }
  },
  bottomBtn: {
    position: 'absolute',
    top: 360,
    left: 0,
    right: 0,
    bottom: 0,
    height: 30,
    width: 90,
    color: '#FFFFFF',
    backgroundColor: 'orange',
    textAlign: 'center',
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOpacity: 1.0,
    shadowRadius: 2,
    shadowOffset: { height: 10, width: 5 }
  }
});
