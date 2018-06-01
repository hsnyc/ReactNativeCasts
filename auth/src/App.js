//Functional Componet
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';

class App extends Component {
    //lifecycle method
    conponentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyC-c7u8BlHC2WFYbd6AFXiF1ikvOHPClIA",
            authDomain: "authentication-798a0.firebaseapp.com",
            databaseURL: "https://authentication-798a0.firebaseio.com",
            projectId: "authentication-798a0",
            storageBucket: "authentication-798a0.appspot.com",
            messagingSenderId: "323725003005"
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <Text>Auth</Text>
            </View>
        );
    }
}

export default App;