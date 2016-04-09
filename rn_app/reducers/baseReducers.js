'use strict';

import React, {
  Image
} from 'react-native';
import {
  ZIP_SUBMIT,
  GET_CURRENT,
  DETAIL_PRESS,
  GET_FORECAST,
  GET_STATIONS
} from '../actions/actions';
import { combineReducers } from 'redux';

const image1 = require('image!cold_cloud');
const image2 = require('image!cloud');
const initialState = {
  zip: 15767,
  enterZip: false,
  flavor1: 'It\'s going to be cold for zip code: ',
  flavor2: 'And it will last you',
  city: '',
  image: image2,
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

function zipSubmit(state = initialState, action = {}) {
  console.log('//// zip submit');
  switch (action.type) {
    case ZIP_SUBMIT:
      return {
        ...state,
        zip: action.zip,
        enterZip: action.enterZip
      };
    default:
      return state;
  };
};

function detailPress(state = initialState, action = {}) {
  console.log('//// detail press');
  switch (action.type) {
    case DETAIL_PRESS:
      return {
        ...state,
        overlayTop: state.details.overlayTop?false:true
      };
    default:
      return state;
  };
};

const rnApp = combineReducers({
  zipSubmit,
  detailPress
});

export default rnApp;
