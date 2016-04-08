/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component
} from 'react-native';
import WeatherBase from './rn_app/components/weatherBase';

class WeatherProject extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('//// render() android ////');
    return (
      <WeatherBase />
    );
  }
};

AppRegistry.registerComponent( 'WeatherProject', () => WeatherProject );
