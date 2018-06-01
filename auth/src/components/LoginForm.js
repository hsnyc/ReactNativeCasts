import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, Card, CardSection } from './common';

//Class Based Componet
class LoginForm extends Component {
    render() {
        return (
            <Card>
                <CardSection />
                <CardSection />
                <CardSection>
                    <Button>Login</Button>
                </CardSection>

            </Card>
        );
    }
}

export default LoginForm;