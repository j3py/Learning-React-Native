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
import Map from './map/map';

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strings: ['5-day list', '5-day chart', 'Station map'],
      booleans: [true, false, false]
    }
  }

  _handleMFPress(index) {
    let array = [false, false, false];
    array[index] = true;
    this.setState({
      booleans: array
    });
  }

  render() {
    let btns = [styles.leftBtn, styles.rightBtn];
    let transforms = [styles.transformLeft, styles.transformRight];
    let current = this.state.booleans.indexOf(true);
    btns.splice(current, 0, false);
    transforms.splice(current, 0, false);

    return (
      <View style={ styles.forecastContainer }>
        { this.state.booleans.map((bool, index) => (
          bool ? null :
          <View key={ index }>
            <View style={ btns[index] } />
            <TouchableHighlight onPress={ this._handleMFPress.bind(this, index) } >
              <Text style={ transforms[index] } >
                { this.state.strings[index] }
              </Text>
            </TouchableHighlight>
          </View>
        ))}

        { (this.state.booleans[0] === true) ?
          <View>
            <ForecastList
              flipper={ styles.flipper }
              forecast={ this.props.forecast } />
            <Text style={ styles.bottomBtn }>
              { this.state.strings[0] }
            </Text>
          </View> : null }

        { (this.state.booleans[1] === true) ?
          <View>
            <ForecastChart
              flipper={ styles.flipper }
              forecast={ this.props.forecast } />
            <Text style={ styles.bottomBtn }>
              { this.state.strings[1] }
            </Text>
          </View> : null }

        { (this.state.booleans[2] === true) ?
          <View>
            <Map
              flipper={ styles.flipper }
              loc={ this.props.loc }
              stations={ this.props.stations } />
            <Text style={ styles.bottomBtn }>
              { this.state.strings[2] }
            </Text>
          </View> : null }
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
    top: 10,
    left: -185,
    right: 0,
    bottom: 0,
    height: 340,
    width: 30,
    backgroundColor: 'cyan',
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOpacity: 1.0,
    shadowRadius: 2,
    shadowOffset: { height: 10, width: 5 }
  },
  rightBtn: {
    position: 'absolute',
    top: 10,
    left: 185,
    right: 0,
    bottom: 0,
    height: 340,
    width: 30,
    backgroundColor: 'green',
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOpacity: 1.0,
    shadowRadius: 2,
    shadowOffset: { height: 10, width: 5 }
  },
  transformLeft: {
    position: 'absolute',
    top: 10,
    left: -180,
    right: 0,
    bottom: 0,
    height: 40,
    width: 30,
    color: '#FFFFFF',
    textAlign: 'center',
    transform: [{ rotate: '270deg' }]
  },
  transformRight: {
    position: 'absolute',
    top: 10,
    left: 180,
    right: 0,
    bottom: 0,
    height: 40,
    width: 30,
    color: '#FFFFFF',
    textAlign: 'center',
    transform: [{ rotate: '90deg' }]
  },
  bottomBtn: {
    position: 'absolute',
    top: 360,
    left: -40,
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
