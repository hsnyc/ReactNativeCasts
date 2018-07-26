import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class loginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(pw) {
        this.props.passwordChanged(pw);
    }

    onButtonPress() {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    render() {
        //console.log(this.props.email);
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email} // lets tell this input what the value should be ..Yeah!
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="Password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password} // lets tell this input what the value should be.. boyaa!
                    />
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

//get the state back to this component via mapStateToProps.
//This will make the state available as a props inside the component. i.e this.props.email
const mapStateToProps = state => {
    //console.log(state.auth.email);
    return {
        email: state.auth.email,
        password: state.auth.password
    };
};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(loginForm);
