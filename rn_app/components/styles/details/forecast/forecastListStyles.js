'use strict';

import React, { StyleSheet } from 'react-native';
import { baseFontSize } from '../../baseFontSize';

export const styles = StyleSheet.create({
  forecastContainer: {
    flex: 1,
    alignItems: 'center'
  },
  bigText: {
    flex: 2,
    fontSize: baseFontSize + 4,
    textAlign: 'left',
    margin: 10,
    color: '#FFFFFF'
  },
  smallText: {
    flex: 2,
    fontSize: baseFontSize - 4,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  },
  border: {
    flex: 1,
    overflow: 'hidden',
    borderBottomColor: 'white',
    borderBottomWidth: 3
  }
});
