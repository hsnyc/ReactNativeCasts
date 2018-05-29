//Functional Componet
import React from 'react';
import { Text, View } from 'react-native';

//Class Based Componet
const AlbumDetail = (props) => {
    return (
        <View>
            <Text>{props.album.title}</Text>
        </View>
    );
};

export default AlbumDetail;
