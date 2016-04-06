'use strict';

import React, { StyleSheet } from 'react-native';
import { baseFontSize } from '../baseFontSize';

export const styles = StyleSheet.create({
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
