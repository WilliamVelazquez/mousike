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

import { SongList } from './SongList';
import { GlobalStyle } from '../../GlobalStyles';

import songs from '../../utils/mocks/songs';

storiesOf('Song Elements', module)
  .addDecorator(withKnobs)
  .add('SongList', () => {
    return (
      <>
        <GlobalStyle />
        <SongList songs={songs} />
      </>
    );
  });
