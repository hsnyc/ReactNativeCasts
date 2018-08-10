//Functional Componet
import React from 'react';
import { Text, View } from 'react-native';

const CardSection = (props) => {
    return (
        //using an array in order to overwrite style props
        <View style={[styles.containerStyles, props.style]} >
            {props.children}
        </View>
    );
};

const styles = {
    containerStyles: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export { CardSection };
