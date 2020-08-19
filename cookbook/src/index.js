import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReduser from './store/reducers/users';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { getUsersWatcher } from './store/sagas/usersSaga';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReduser,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(getUsersWatcher);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
