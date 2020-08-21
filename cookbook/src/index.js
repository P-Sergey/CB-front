import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { getUsersWatcher } from './store/sagas/usersSaga';
import { getRecipesWatcher } from './store/sagas/recipesSaga';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(getUsersWatcher);
sagaMiddleware.run(getRecipesWatcher);

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
