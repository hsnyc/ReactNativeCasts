import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

    render() {
        
        //de-structuring
        const { titleStyle } = styles;
        const { id, title } = this.props.library.item;
        //console.log(this.props);

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectedLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

//connect([stateToProps], [actions])([component])
export default connect(null, actions)(ListItem);