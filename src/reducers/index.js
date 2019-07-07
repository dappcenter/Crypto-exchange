import { combineReducers } from 'redux';
import fetchDataReducer from './fetchDataReducer'
import fetchOrderbookDataReducer from './fetchOrderbookDataReducer'

const rootReducer = combineReducers({
    BTCData: fetchDataReducer,
    BTCOrderbook: fetchOrderbookDataReducer
});

export default rootReducer;