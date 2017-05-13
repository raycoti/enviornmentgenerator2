import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger'; 
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger())) )
