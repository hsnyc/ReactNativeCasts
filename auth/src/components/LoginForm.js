import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

//Class Based Componet
class LoginForm extends Component {

    state = { text: '' };

    render() {
        return (
            <Card>
                <CardSection>
                    <TextInput 
                        value={this.state.text}
                        onChangeText={text => this.setState({ text })}
                        style={{ height: 40, width: 100 }}
                    />
                </CardSection>
                <CardSection />
                <CardSection>
                    <Button>Login</Button>
                </CardSection>

            </Card>
        );
    }
}

export default LoginForm;