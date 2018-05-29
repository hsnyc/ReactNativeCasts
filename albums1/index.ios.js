import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

export default class albums1 extends Component {
  render() {
    return (
      <View>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}

AppRegistry.registerComponent('albums1', () => albums1);