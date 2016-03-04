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
  TextInput
} from 'react-native';

class WeatherProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: ''
    };
  }

  _handleTextChange(event) {
    console.log(event.nativeEvent.text);
    this.setState({
      zip: event.nativeEvent.text
    });
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.welcome }>
          You input { this.state.zip }
        </Text>
        <TextInput
          style={ styles.input }
          returnKeyType='go'
          onSubmitEditing={ this._handleTextChange } />
        <Text style={ styles.instructions }>
          To get started, edit index.android.js
        </Text>
        <Text style={ styles.instructions }>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    height: 40
  }
});

AppRegistry.registerComponent( 'WeatherProject', () => WeatherProject );
