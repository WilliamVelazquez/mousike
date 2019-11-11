import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { createStore, compose } from 'redux';
// import reducer from './reducers';
import App from './routes/App';
// import MusicPlayer from '../../ssr/src/frontend/components/FullMusicPlayer/FullMusicPlayer';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
// ReactDOM.render(
//   <Provider>
//     <App />
//   </Provider>,
//   document.getElementById('app'),
// );
