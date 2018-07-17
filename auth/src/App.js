//Functional Componet
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner, CardSection } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

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
        // console.log(this.state.loggedIn);
        switch(this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button whenPressed={() => firebase.auth().signOut()}>Log Out</Button>
                    </CardSection>
                );

            case false:
                return <LoginForm />;

            default:
                return (
                    <CardSection>
                        <Spinner size="large" />
                    </CardSection>
                );
        }        
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