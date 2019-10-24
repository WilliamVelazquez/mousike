/**
 * @author David Behar <david@behar.io>
 */
import React from 'react';
// import { Router } from 'react-router-dom';

import { storiesOf } from '@storybook/react';
import { withKnobs,
  // text,
  // boolean,
} from '@storybook/addon-knobs';

import { MusicPlayer } from './MusicPlayer';
import { GlobalStyle } from '../../GlobalStyles';

storiesOf('Player', module)
  .addDecorator(withKnobs)
  .add('MusicPlayer', () => {
    return (
      <>
        <GlobalStyle />
        <MusicPlayer />

      </>
    );
  });
