/**
 * @author William Velazquez <info@williamvelazquez.com>
 */

import { createGlobalStyle } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyleStoryBook = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button {
    margin: 0;
  }

  ul {
    list-style: none;
  }

  button {
    background: transparent;
    border: 0;
    outline: 0;
  }

  body {
    background: black;
    height: 100vh;
    width: 100%;
    margin: 0 auto;
    color: #ffffff;
    margin-top: 50px;
    max-width: 600px;
    overscroll-behavior: none;
  }
`;
export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button {
    margin: 0;
  }

  button {
    background: transparent;
    border: 0;
    outline: 0;
  }

  body {
    /* background: black; */
    /* height: 100vh; */
    margin: 0;
    width: 100%;
    color: #ffffff;
    background: ${props => props.background || '#333333'};
    /* margin-top: 50px; */
    /* max-width: 600px; */
    /* overscroll-behavior: none; */
  }
`;
