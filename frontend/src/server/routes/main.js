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

const initialState = {
  cart: [],
  products: [],
};

const main = (req, res, next) => {
  try {
    console.log('try');
    const store = createStore(reducer, initialState);
    const sheet = new ServerStyleSheet(); // <-- creating out stylesheet
    const reactElements = (
      <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
          <Layout>{renderRoutes(Routes)}</Layout>
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
