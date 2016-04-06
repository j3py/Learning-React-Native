'use strict';

import React, { StyleSheet } from 'react-native';
import { baseFontSize } from './baseFontSize';

export const styles = StyleSheet.create({
  forecastContainer: {
    alignItems: 'center'
  },
  bigText: {
    flex: 2,
    fontSize: baseFontSize + 4,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  }
});
