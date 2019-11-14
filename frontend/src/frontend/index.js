import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './routes/App';
import reducer from './reducers';

// const initialState = {
//   cart: [],
//   products: [],
// };

let composeEnhacers;
if (process.env.NODE_ENV === 'production') composeEnhacers = compose;
else composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const preloadedState = window.__PRELOADED_STATE__;
const store = createStore(reducer, preloadedState, composeEnhacers(applyMiddleware(thunk)));

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
