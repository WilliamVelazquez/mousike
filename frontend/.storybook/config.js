/**
 * @author William Velazquez <info@williamvelazquez.com>
 */
import { configure } from '@storybook/react';

import { addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';

import williamLogo from '../src/frontend/images/LogoWhite_55.png';

addParameters({
  options: {
    theme: {
      ...themes.dark,
      colorSecondary: '#8e1a1a',
      brandTitle: `Mousike`,
      brandUrl: 'https://williamvelazquez.com/',
      brandImage: williamLogo
    }
  }
});

// We use context from Webpack to change the context to search the stories.
// Path where we search, Search on subdirectories?, Regular Expression to search files.
const req = require.context('../src/frontend/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);