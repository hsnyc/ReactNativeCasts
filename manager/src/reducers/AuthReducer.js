import { EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case EMAIL_CHANGED:
            //Redux will compare the old state object with the new state passed in by the action creator
            //make sure you are creating a NEW state object instead of trying to modify the exisiting state
            //this new object takes the exisitng state and adds the new action property
            return { ...state, email: action.payload };
        default: 
            return state;
    }
};
