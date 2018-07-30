// this function is an action creator, a plain javascript function that returns actions 
export const selectedLibrary = (libraryId) => { 
    //the action itself, a plain Js object with a type and payload key.
    //Type property is the command/instruction to our reducers
    //Payload is the data that will be provided to the component
    return {
        type: 'select_library',
        payload: libraryId
    };
};