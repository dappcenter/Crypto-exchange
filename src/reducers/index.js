import { combineReducers } from 'redux';
import fetchDataReducer from './fetchDataReducer'

const rootReducer = combineReducers({
    BTCData: fetchDataReducer,
});

export default rootReducer;