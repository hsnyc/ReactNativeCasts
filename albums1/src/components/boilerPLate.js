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
class Header extends Component {
    render () {
        return <Text>Hi There! </Text>
    }
}