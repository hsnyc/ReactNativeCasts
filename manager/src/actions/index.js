import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS } from './types';
import firebase from 'firebase';

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
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
        });
    };
};
