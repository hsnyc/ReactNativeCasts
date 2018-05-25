// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = () => {
    return <Text style={styles.textStyle}>All Albums!</Text>;
};

// Component styles
const styles = {
    textStyle: {
        fontSize: 20,
        color: 'green'
    }
};

// Make the component availalable to other parts of the app
export default Header;