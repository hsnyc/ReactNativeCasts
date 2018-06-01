import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

export default class albums2 extends Component {
  render() {
    return (
      <View style={{ flex: 1 }} >
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}

AppRegistry.registerComponent('albums2', () => albums2);
