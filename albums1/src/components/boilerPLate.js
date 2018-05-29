//Functional Componet
import React from 'react';
import { Text, View } from 'react-native';

const AlbumList = () => {
    return (
        <View>
            <Text>Album List!! </Text>
        </View>
    );
};

export default AlbumList;


//Class Based Componet
class AlbumList extends Component {
    render() {
        return (
            <View>
                <Text>Album List!! </Text>
            </View>
        );
    }
}

export default AlbumList;