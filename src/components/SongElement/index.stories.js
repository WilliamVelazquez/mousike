/**
 * @author David Behar <david@behar.io>
 */
import React from 'react';
// import { Router } from 'react-router-dom';

import { storiesOf } from '@storybook/react';
import { withKnobs,
  text,
  // boolean,
} from '@storybook/addon-knobs';

import { SongElement } from './SongElement';
import { GlobalStyle } from '../../GlobalStyles';

storiesOf('Song Elements', module)
  .addDecorator(withKnobs)
  .add('SongElement', () => React.createElement(() => {
    return (
      <>
        <GlobalStyle />
        <SongElement
          name={text('Song Name', 'Song Name')}
          duration={text('Duration', '08:36')}
          href={text('Link to', 'https://example.org')}
        />

      </>
    );
  }));
