// Import libraries for making a component
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class AlbumList extends Component {
    componentWillMount() {
        // console.log('componet will mount');
        // debugger;
    }
    render() {
        return (
            <View>
                <Text>Album List!! </Text>
            </View>
        );
    }
}

export default AlbumList;
