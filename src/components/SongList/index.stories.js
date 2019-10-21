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

storiesOf('Song Elements', module)
  .addDecorator(withKnobs)
  .add('SongList', () => React.createElement(() => {
    const songs = [
      {
        key: 1,
        name: 'Canción Feliz',
        duration: '12:00',
        href: '/',
      },
      {
        key: 2,
        name: 'Canción Feliz',
        duration: '12:00',
        href: '/',
      },
      {
        key: 3,
        name: 'Canción Feliz',
        duration: '12:00',
        href: '/',
      },
      {
        key: 4,
        name: 'Canción Feliz',
        duration: '12:00',
        href: '/',
      },
      {
        key: 5,
        name: 'Canción Feliz',
        duration: '12:00',
        href: '/',
      },
      {
        key: 6,
        name: 'Canción Feliz',
        duration: '12:00',
        href: '/',
      },
      {
        key: 7,
        name: 'Canción Feliz',
        duration: '12:00',
        href: '/',
      },
      {
        key: 8,
        name: 'Canción Feliz',
        duration: '12:00',
        href: '/',
      },
    ];
    return (
      <>
        <GlobalStyle />
        <SongList songs={songs} />

      </>
    );
  }));
