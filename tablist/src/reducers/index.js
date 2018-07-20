import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

//our combined application reducers
//the key determines how the application state looks and gets formed
export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});