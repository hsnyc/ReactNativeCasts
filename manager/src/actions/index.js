import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';

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
