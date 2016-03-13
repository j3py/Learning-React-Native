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
  Image
} from 'react-native';
import Forecast from './forecast';
import { APPID } from '../env_var';

export default class WeatherBase extends Component {
  constructor(props) {
    super(props);
    this.image1 = require('image!cold_cloud');
    this.image2 = require('image!cloud');
    this.state = {
      zip: '15767',
      forecast: {
        main: 'It\'s going to be grey.',
        description: 'the rest of your life.',
        temp: 45.7
      },
      flavor1: 'It\'s going to be cold for zip code: ',
      flavor2: 'And it will last you',
      image: this.image1
    };
  }

  _handleTextChange(event) {
    var zip = event.nativeEvent.text;
    this.setState({
      zip: zip
    });

    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + zip +
      '&units=imperial&APPID=' + APPID)
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON);
        this.setState({
          forecast: {
            main: responseJSON.weather[0].main,
            description: responseJSON.weather[0].description,
            temp: responseJSON.main.temp
          },
          flavor1: 'Get weather for zip code: ',
          flavor2: 'Current weather for ' + responseJSON.name,
          image: this.image2
        });
      })
      .catch((error) => {
        console.warn(error);
      });
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
            <Forecast
              mainText={ styles.mainText }
              flavor2={ this.state.flavor2 }
              forecast={ this.state.forecast } />
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
    width: 50,
    height: baseFontSize,
  },
  mainText: {
    flex: 1,
    fontSize: baseFontSize,
    textAlign: 'center',
    color: '#FFFFFF'
  }
});
