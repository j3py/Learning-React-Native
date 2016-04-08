'use strict';

import React, { StyleSheet } from 'react-native';
import { baseFontSize } from '../../baseFontSize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 6
  },
  item: {
    flexDirection: 'column',
    flex: 1,
    overflow: 'hidden',
    marginBottom: 5,
    paddingHorizontal: 10
  },
  label: {
    color: '#FFFFFF',
    flex: 1,
    fontSize: 12,
    position: 'relative',
    top: 2
  },
  data: {
    flex: 2,
    flexDirection: 'row'
  },
  dataNumber: {
    color: '#FFFFFF',
    fontSize: 11
  },
  // Bar
  bar: {
    alignSelf: 'center',
    borderRadius: 5,
    height: 8,
    marginRight: 5
  },
  points: {
    backgroundColor: 'purple'
  }
});
