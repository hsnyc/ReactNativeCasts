//Functional Componet
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: false };

    //lifecycle method
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyC-c7u8BlHC2WFYbd6AFXiF1ikvOHPClIA",
            authDomain: "authentication-798a0.firebaseapp.com",
            databaseURL: "https://authentication-798a0.firebaseio.com",
            projectId: "authentication-798a0",
            storageBucket: "authentication-798a0.appspot.com",
            messagingSenderId: "323725003005"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        if(this.state.loggedIn) {
            return (
                <Button>
                    Log Out
                </Button>
            );
        }

        return <LoginForm />;
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;