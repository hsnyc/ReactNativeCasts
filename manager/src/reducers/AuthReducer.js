import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = { 
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    
    switch (action.type) {
        case EMAIL_CHANGED:
            //Redux will compare the old state object with the new state passed in by the action creator
            //make sure you are creating a NEW state object instead of trying to modify the exisiting state
            //this new object takes all the properties of our existing state object and adds it to the new object and it adds (or overwrites) the new action property
            return { ...state, email: action.payload };

        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };

        case LOGIN_USER:
            return { ...state, loading: true, error: '' };

        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };

        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed.', loading: false };
        
        default: 
            return state;
    }
};
