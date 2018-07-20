import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    
    renderItem(library) {
        return <ListItem library={library} />
    }
    
    render() {
        return (
            <FlatList
                data={this.props.libraries}
                renderItem={this.renderItem}
                keyExtractor={library => library.id}
            />
        )
    }
}

//provides application level state to the component level
//provides the component with the state as a prop. Sort of like plucking properties out of our state object and injecting them into our components.
//Note: everytime the application state changes, the mapStateToProps function will re-run passing a new set of props to our components which causes the components to re-render.
const mapStateToProps = state => {
    // console.log(state);
    return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);