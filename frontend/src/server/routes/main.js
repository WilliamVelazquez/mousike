import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import Routes from '../../frontend/routes/ServerRoutes';
import Layout from '../../frontend/components/Layout';
import reducer from '../../frontend/reducers';
import render from '../render';

require('dotenv').config();

console.log('main.js');

// import initialState from '../../frontend/initialState';

// const initialState = {
//   cart: [],
//   products: [],
// };
// apiKeyToken: config.apiKeyToken
let initialState;

const groupBy = key => array => array.reduce(
  (objectsByKeyValue, obj) => ({
    ...objectsByKeyValue,
    [obj[key]]: (objectsByKeyValue[obj[key]] || []).concat(obj),
  }),
  {},
);

// example usage

// console.log('Dog', grouped.get('Dog')); // -> [{type:"Dog", name:"Spot"}, {type:"Dog", name:"Rover"}]
// console.log(grouped.get('Cat')); // -> [{type:"Cat", name:"Tiger"}, {type:"Cat", name:"Leo"}]

const main = async (req, res, next) => {
  try {
    try {
      const { token, email, name, id } = req.cookies;
      let user = {};
      if (email || name || id) {
        user = {
          id,
          email,
          name,
        };
      }
      console.log('Hey songs list');
      let songsList = await axios({
        url: `${process.env.API_URL}/api/music/tracks`,
        headers: { Authorization: `Bearer ${token}` },
        method: 'get',
      });
      songsList = songsList.data.data;

      // console.log(songsList);

      console.log('helloworld');

      // let grouped = [];
      // grouped = groupBy(songsList, song => song.artist);
      // grouped.get('La Adictiva Banda San José de Mesillas');
      // const titles = [];
      // songsList.map((song) => {
      //   titles.push(song.artist);
      // });
      // const groupedTitles = groupBy(titles, (title) => {
      //   // console.log('title', title);
      //   return title;
      // });

      // console.log('titles', titles);
      // console.log('groupedTitles', groupedTitles);

      const cars = [
        { brand: 'Audi', color: 'black' },
        { brand: 'Audi', color: 'white' },
        { brand: 'Ferarri', color: 'red' },
        { brand: 'Ford', color: 'white' },
        { brand: 'Peugot', color: 'white' },
      ];

      const groupByBrand = groupBy('brand');
      const groupByArtist = groupBy('artist');

      const groupedByBrand = groupByBrand(cars);
      const groupedByArtist = groupByArtist(songsList);

      initialState = {
        user,
        playing: {
          songNumber: '',
          playList: '',
          // selectedSong: null,
        },
        myList: [],
        trends: songsList,
        originals: songsList.filter(song => song.preview),
        artists:{
          ...groupedByArtist
        },
        // grouped: [grouped.get('La Adictiva Banda San José de Mesillas')],
        // titles,
        // groupedTitles,
      };

    } catch (error) {
      initialState = {
        user: {},
        playing: {},
        myList: [],
        trends: {},
        originals: [],
        grouped: [],
      };
      console.log(error);
      console.log('Initial State', initialState);

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
