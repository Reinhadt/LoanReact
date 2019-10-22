import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk'

import './index.css';
import App from './App';
import homeReducer from './store/reducers/homeReducer'
import calculatorReducer from './store/reducers/calculatorReducer'
import menuReducer from './store/reducers/menuReducer'
import * as serviceWorker from './serviceWorker';
require('dotenv').config()

const rootReducer = combineReducers({
    home: homeReducer,
    cal : calculatorReducer,
    menu: menuReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

);

ReactDOM.render( app, document.getElementById('root'));

serviceWorker.unregister();
