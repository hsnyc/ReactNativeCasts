// this function is an action creator, a plain javascript function that return actions 
export const selectedLibrary = (libraryId) => { 
    //the action itself, a plain Js object with a type and payload key.
    //Type property is the command/instruction to our reducers
    return {
        type: 'select_library',
        payload: libraryId
    };
};