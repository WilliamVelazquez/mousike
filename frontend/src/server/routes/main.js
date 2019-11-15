import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import Routes from '../../frontend/routes/ServerRoutes';
import Layout from '../../frontend/components/Layout';
import reducer from '../../frontend/reducers';
import render from '../render';

// import initialState from '../../frontend/initialState';

// const initialState = {
//   cart: [],
//   products: [],
// };

let initialState;
const main = (req, res, next) => {
  try {
    try {
      const { email, name, id } = req.cookies;
      console.log('helloworld');
      initialState = {
        user: {
          id,
          email,
          name,
        },
        playing: {},
        myList: [],
        trends: [],
        originals: [],
      };
    } catch (error) {
      console.log(error);
    }

    console.log('initialState.user.id', initialState.user.id);
    console.log('Here is the initial state id', initialState.user.id);
    const isLogged = (initialState.user.id);
    const store = createStore(reducer, initialState);
    const sheet = new ServerStyleSheet(); // <-- creating out stylesheet
    const reactElements = (
      <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
          <Layout>{renderRoutes(Routes(isLogged))}</Layout>
        </StaticRouter>
      </Provider>
    );

    const html = renderToString(sheet.collectStyles(reactElements));
    const styles = sheet.getStyleTags(); // <-- getting all the tags from the sheet
    const preloadedState = store.getState();
    // res.send(render(html, preloadedState));
    res.send(render(html, preloadedState, styles));
  } catch (err) {
    next(err);
  }
};

export default main;
