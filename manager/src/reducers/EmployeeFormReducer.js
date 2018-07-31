import {
    EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //using key interpolation
        case EMPLOYEE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };

        default:
            return state;
    }
};