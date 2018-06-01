import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

//Class Based Componet
class LoginForm extends Component {

    state = { email: '', password: '' };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        placeholder="user@gmail.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        placeholder="Your Secret Password"
                        label="Password"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <CardSection>
                    <Button>Login</Button>
                </CardSection>

            </Card>
        );
    }
}

export default LoginForm;