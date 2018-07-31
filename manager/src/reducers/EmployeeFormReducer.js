import {
    EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    console.log(state);

    switch (action.type) {
        //using key interpolation
        case EMPLOYEE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };

        default:
            return state;
    }
};