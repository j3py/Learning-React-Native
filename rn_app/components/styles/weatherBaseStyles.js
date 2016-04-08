'use strict';

import React, { StyleSheet } from 'react-native';
import { baseFontSize } from './baseFontSize';

export const styles = StyleSheet.create({
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
    paddingTop: 5,
    backgroundColor: 'rgba(0,0,0,0.6)',
    // opacity: 0.5,
    borderRadius: 5,
    flexDirection: 'column',
    alignItems: 'center'
  },
  row: {
    flex: 1,
    flexDirection: 'column',
    //flexWrap: 'nowrap',
    alignItems: 'center',
    opacity: 1.0,
    padding: 30
  },

  zipCode: {
    flex: 1,
    //marginTop: 10,
    width: 60,
    height: 44
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
