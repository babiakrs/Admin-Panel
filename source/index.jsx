import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from 'Reducers';
import initialState from 'Reducers/initial-state.js';
import { ErrorBoundary } from 'Components/ErrorBoundary';
import { App } from 'Components/App';
import 'Styles/main.sass';

const store = createStore(
	reducers,
	initialState,
	compose(
		applyMiddleware(thunk),
		DEVBUILD && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
	)
);

render(
	<Provider store={store}>
		<ErrorBoundary>
			<App/>
		</ErrorBoundary>
	</Provider>,
	document.getElementById('root')
);