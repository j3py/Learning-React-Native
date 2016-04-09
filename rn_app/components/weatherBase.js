'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableHighlight,
  Animated
} from 'react-native';
import CurrentWeather from './currentWeather';
import Detail from './details/detail';
import { APPID } from '../../env_var';
import { styles } from './styles/weatherBaseStyles';

// import redux stuff
import { Provider } from 'react-redux';
import store from '../store/store';
import rnApp from '../reducers/baseReducers';
import {
  ZIP_SUBMIT,
  GET_CURRENT,
  DETAIL_PRESS,
  GET_FORECAST,
  GET_STATIONS
} from '../actions/actions';

export default class WeatherBase extends Component {
  constructor(props) {
    super(props);
    this.image1 = require('image!cold_cloud');
    this.image2 = require('image!cloud');
    this.openDetail = new Animated.Value(0);
    this.closeDetail = new Animated.Value(150);
    this.state = {
      zip: '15767',
      enterZip: false,
      flavor1: 'It\'s going to be cold for zip code: ',
      flavor2: 'And it will last you',
      city: '',
      image: this.image2,
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
      details: {
        overlayTop: false,
        forecast: null,
        stations: null
      }
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

  _handleZipSubmit(event) {
    var zip = event.nativeEvent.text;
    store.dispatch(ZIP_SUBMIT(zip));

    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.zip +
      ',us&units=imperial&APPID=' + APPID;
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

  _handleDetailPress(event) {
    if(this.state.details.overlayTop) {
      Animated.timing(this.openDetail, { toValue: 150 },).start();
      store.dispatch(DETAIL_PRESS());
    } else {
      var urlStns = 'http://api.openweathermap.org/data/2.5/station/find?lat=' +
        this.state.current.loc.latitude + '&lon=' + this.state.current.loc.longitude +
        '&APPID=' + APPID;
      var setStateStns = (responseJSON) => {
        Animated.timing(this.closeDetail, { toValue: 0 },).start();
        store.dispatch(DETAIL_PRESS());
        this.setState({
          stations: responseJSON
        });
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
  }

  render() {
    console.log('//// STORE', store);
    return (
      <Provider store={ store }>
        <View style={ styles.container } >
          <Image source={ this.state.image }
            resizeMode='contain'
            style={ styles.backdrop } >
            <Animated.View style={ [styles.overlay, { marginTop: this.state.details.overlayTop?this.openDetail:this.closeDetail }] }>
              <View style={ styles.row }>
                  <Text style={ styles.mainText }>
                    { this.state.flavor1 }
                  </Text>
                  <TextInput
                    style={ [styles.zipCode, styles.mainText] }
                    returnKeyType='go'
                    placeholder={ this.state.zip }
                    placeholderTextColor='gray'
                    clearTextOnFocus={ true }
                    onSubmitEditing={ this._handleZipSubmit.bind(this) } />
              </View>
              <CurrentWeather
                mainText={ styles.mainText }
                flavor2={ this.state.flavor2 }
                current={ this.state.current } />

              { this.state.enterZip ? <TouchableHighlight onPress={ this._handleDetailPress.bind(this) }>
                <Text style={ styles.button }>
                  Details
                </Text>
              </TouchableHighlight> : null }

              { this.state.details.overlayTop ? <Detail
                loc={ this.state.current.loc }
                forecast={ this.state.details.forecast }
                stations={ this.state.details.stations } /> : null }

            </Animated.View>
          </Image>
        </View>
      </Provider>
    );
  }
}
