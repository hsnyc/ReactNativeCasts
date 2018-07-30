import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'; //middleware
import reducers from './reducers';
import LoginForm from './components/loginForm';
import Router from './Router';

class App extends Component {

    componentWillMount() {
        // Initialize Firebase
        const config = {
            apiKey: 'AIzaSyD8E9WUgG2bunNVdxRTJOChx08U5EtHCyc',
            authDomain: 'manager-320b0.firebaseapp.com',
            databaseURL: 'https://manager-320b0.firebaseio.com',
            projectId: 'manager-320b0',
            storageBucket: '',
            messagingSenderId: '432483403158'
        };
        
        firebase.initializeApp(config);
    }

    render() {
        return (
            //Provider is what connects to the connect tags and makes sure those tags have access to the store to grab the redux state and passes to all the components in the app.
            //Must provide a default reducer to get initial app state.
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Router />
            </Provider>
        );
    }
}

export default App;
