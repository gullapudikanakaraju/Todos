import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import {createLogger} from 'redux-logger';
import rootReducer from '../reducers/rootReducer.js';

export default function configureStore(initialState){
	return  createStore(
		rootReducer, 
		initialState, 
		applyMiddleware(createLogger(), thunk, promiseMiddleware())
	);
};