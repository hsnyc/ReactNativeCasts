// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
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
        paddingTop: 15,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2, //for iOS
        elavation: 2, //for Android
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        color: '#333333'
    }
};

// Make the component availalable to other parts of the app
export { Header };
