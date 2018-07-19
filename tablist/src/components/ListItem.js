import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

    //to figure out if Library is currently selected
    renderDescription() {
        const { library, isExpanded } = this.props;
        if (isExpanded) {
            return (
                <Text>{library.item.description}</Text>
            );
        }
    }

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
                    {this.renderDescription()}
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

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.item.id;
    return { isExpanded: expanded };
};

//connect([stateToProps], [actions])([component])
export default connect(mapStateToProps, actions)(ListItem);