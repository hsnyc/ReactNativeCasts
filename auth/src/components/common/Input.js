//Functional Componet
import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label }) => {
    return (
        <View>
            <Text>{ label }</Text>
        </View>
    );
};

export { Input };