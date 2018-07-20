import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class loginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
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
                    />
                </CardSection>

                <CardSection>
                    <Button>
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
        email: state.auth.email
    };
};

export default connect(mapStateToProps, { emailChanged })(loginForm);
