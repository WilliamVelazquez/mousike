import getManifest from '../getManifest';

let files = false;
if (process.env.NODE_ENV !== 'development') files = getManifest();

const render = (html, preloadedState, styles) => {
  console.log('render/index - rendered');
  const result = `
  <!DOCTYPE html>
    <html>
      <head>
        <title>Platzi Store</title>
        <link rel="stylesheet" href="assets/app.css" type="text/css"></link>
        ${styles}        
        <script src="https://kit.fontawesome.com/473d269aa9.js"></script>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
        // WARNING: See the following for security issues around embedding JSON in HTML:
        // http://redux.js.org/recipes/ServerRendering.html#security-considerations
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
    /</g,
    '\\u003c',
  )}
      </script>
        <script src="assets/app.js" type="text/javascript"></script>
        <script src="assets/vendor.js" type="text/javascript"></script>
      </body>
    </html>
  `;
  return result;
};

export default render;
