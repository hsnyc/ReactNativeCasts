import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, NativeModules, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

//NativeModules is required to make Animation work in Android.
const { UIManager } = NativeModules
UIManager.setLayoutAnimationEnabledExperimental
&& UIManager.setLayoutAnimationEnabledExperimental(true)

class ListItem extends Component {
    
    //adding a lifecycle method for animation. Runs whenever the component is about to be re-render on the screen.
    componentWillUpdate() {
        LayoutAnimation.spring();
    }
    
    //to figure out if Library is currently selected
    renderDescription() {
        const { library, isExpanded } = this.props;
        if (isExpanded) {
            return (
                <CardSection>
                    <Text>{library.item.description}</Text>
                </CardSection>
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
                //when pressed call the selectedLibrary action creator w/ id argument
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

//provides application level state to the component level
//provides the component with the state as a prop. Sort of like plucking properties out of our state object and injecting them into our components.
//Note: everytime the application state changes, the mapStateToProps function will re-run passing a new set of props to our components which causes the components to re-render.
const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.item.id;
    return { isExpanded: expanded };
};

//connect([stateToProps], [actions])([component])
export default connect(mapStateToProps, actions)(ListItem);