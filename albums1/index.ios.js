/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import Header from './src/components/header';

export default class albums1 extends Component {
  render() {
    return (
      <Header />
    );
  }
}

AppRegistry.registerComponent('albums1', () => albums1);
