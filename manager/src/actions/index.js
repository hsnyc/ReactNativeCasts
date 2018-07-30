import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from './types';

// this function is an action creator, a plain javascript function that returns actions 
export const emailChanged = (text) => {
    //the action itself, a plain Js object with a type and payload key.
    //Type property is the command/instruction to our reducers
    //Payload is the data that will be provided to the component
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (pw) => {
    return {
        type: PASSWORD_CHANGED,
        payload: pw
    };
};

//to log in our users
export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch((error) => {
            console.log(error);
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => loginUserSuccess(dispatch, user))
                .catch(() => loginUserFail(dispatch));
        });
    };
};

//helper funtions
const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    
    //go to this scene after log-in.
    Actions.employeeList();
};
