//this reducer handles the selected item state

export default (state = null, action) => {
    //console.log(action);
    switch (action.type) {
        case 'select_library':
            return action.payload;
    
        default: 
            return state;
    }
};