// this function is an action creator, a plain javascript function that returns actions 
export const emailChanged = (text) => {
    //the action itself, a plain Js object with a type and payload key.
    //Type property is the command/instruction to our reducers
    //Payload is the data that will be provided to the component
    return {
        type: 'email_changed',
        payload: text
    };
};
