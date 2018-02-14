import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore.js';
import {Provider} from 'react-redux';
import App from './components/App.js';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root')
);