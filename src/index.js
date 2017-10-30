import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import todoAppReducer from './reducers';
import App from './components/App';
import './css/index.css';

const history = createHistory();
const middleware = routerMiddleware(history)
const store = createStore(todoAppReducer, applyMiddleware(middleware));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root')
);