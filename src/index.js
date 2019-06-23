import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers/index';
import App from './App'

const container = document.getElementById('container');

const store = createStore(reducers, {
    ask: 'Ask',
    bid: 'Bid',
    BTCData: ''}, applyMiddleware(ReduxThunk));

ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>, container
);