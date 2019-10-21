/**
 * @author William Velazquez <info@williamvelazquez.com>
 */
import React, { useState } from 'react';
import { Router } from 'react-router-dom';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { SongElement } from './SongElement';
import { GlobalStyle } from '../../GlobalStyles';

storiesOf('Song Elements', module)
  .addDecorator(withKnobs)
  .add('SongElement', () => React.createElement(() => {
    const [value, setValue] = useState('');
    return (
      <>
        <GlobalStyle />
        <SongElement name='nombre' duration='duration' href='/' />

      </>
    );
  }));
