// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = () => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>All Albums!</Text>
        </View>
    ); 
};

// Component styles
const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15
    },
    textStyle: {
        fontSize: 20,
        color: '#333333'
    }
};

// Make the component availalable to other parts of the app
export default Header;
