/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableHighlight
} from 'react-native';
import CurrentWeather from './currentWeather';
import Detail from './details/detail';
import { APPID } from '../env_var';

export default class WeatherBase extends Component {
  constructor(props) {
    super(props);
    this.image1 = require('image!cold_cloud');
    this.image2 = require('image!cloud');
    this.details = null;
    this.state = {
      zip: '15767',
      enterZip: false,
      current: {
        main: 'It\'s going to be grey.',
        description: 'the rest of your life.',
        temp: 'Groundhog Day',
        loc: {
          latitude: null,
          longitude: null,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1
        }
      },
      forecast: null,
      stations: null,
      flavor1: 'It\'s going to be cold for zip code: ',
      flavor2: 'And it will last you',
      city: '',
      image: this.image2
    };
  }

  _responseStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response.statusText);
    }
  }

  _jsonReturn(response) {
    return response.json();
  }

  _genericRequest(url, setStateFunc) {
    var responseStatus = this._responseStatus;
    var jsonReturn = this._jsonReturn;
    fetch(url)
      .then(responseStatus)
      .then(jsonReturn)
      .then(setStateFunc)
      .catch((e) =>
        console.warn(e)
      );
  }

  _handleTextChange(event) {
    var zip = event.nativeEvent.text;
    this.setState({
      zip: zip,
      enterZip: true
    });

    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.zip +
      '&units=imperial&APPID=' + APPID;
    var setStateFunc = (responseJSON) => {
      this.setState({
        current: {
          main: responseJSON.weather[0].main,
          description: responseJSON.weather[0].description,
          temp: responseJSON.main.temp,
          loc: {
            latitude: responseJSON.coord.lat,
            longitude: responseJSON.coord.lon,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
          }
        },
        flavor1: 'Get weather for: ',
        flavor2: 'Current weather for ' + responseJSON.name,
        city: responseJSON.name,
        image: this.image1
      });
    };
    this._genericRequest(url, setStateFunc);
  }

  _handleForecastPress(event) {
    // The response to this request duplicates some data
    // and should be refactored as our main request
    var urlStns = 'http://api.openweathermap.org/data/2.5/station/find?lat=' +
      this.state.current.loc.latitude + '&lon=' + this.state.current.loc.longitude +
      '&APPID=' + APPID;
    var setStateStns = (responseJSON) => {
      this.setState({
        stations: responseJSON
      });
      this.details =
          <Detail
            button={ styles.button }
            loc={ this.state.current.loc }
            forecast={ this.state.forecast }
            stations={ this.state.stations } />;
    };

    var urlForecast = 'http://api.openweathermap.org/data/2.5/forecast?q=' + this.state.zip +
      '&units=imperial&APPID=' + APPID;
    var setStateFore = (responseJSON) => {
      this.setState({
        forecast: responseJSON
      });
      // nested fetch
      this._genericRequest(urlStns, setStateStns);
    };

    this._genericRequest(urlForecast, setStateFore);
  }

  render() {
    return (
      <View style={ styles.container } >
        <Image source={ this.state.image }
          resizeMode='contain'
          style={ styles.backdrop } >
          <View style={ styles.overlay }>
            <View style={ styles.row }>
              <Text style={ styles.mainText }>
                { this.state.flavor1 }
              </Text>
              <View style={ styles.zipContainer }>
                <TextInput
                  style={ [styles.zipCode, styles.mainText] }
                  returnKeyType='go'
                  defaultValue={ this.state.zip }
                  onSubmitEditing={ this._handleTextChange.bind(this) } />
              </View>
            </View>
            <CurrentWeather
              mainText={ styles.mainText }
              flavor2={ this.state.flavor2 }
              current={ this.state.current } />

            { this.state.enterZip ? <TouchableHighlight onPress={ this._handleForecastPress.bind(this) }>
              <Text style={ styles.button }>
                Details
              </Text>
            </TouchableHighlight> : null }

            { this.details }
          </View>
        </Image>
      </View>
    );
  }
}

const baseFontSize = 16;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column'
  },
  overlay: {
    marginTop: 200,
    paddingTop: 5,
    backgroundColor: '#000000',
    opacity: 0.5,
    flexDirection: 'column',
    alignItems: 'center'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    padding: 30
  },
  zipContainer: {
    flex: 1,
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3
  },
  zipCode: {
    width: 80,
    height: baseFontSize,
  },
  mainText: {
    flex: 1,
    fontSize: baseFontSize,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  button: {
    flex: 1,
    fontSize: baseFontSize,
    textAlign: 'center',
    color: '#FFFFFF',
    backgroundColor: 'orange',
    borderRadius: 5,
    width: 120
  }
});
