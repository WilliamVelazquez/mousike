/**
 * @author David Behar <david@behar.io>
 */

import React from 'react';
// import { Link } from 'react-router-dom';
import plusIcon from '../../assets/static/plus-icon.png';
import { SongName, SongDuration, SongAddImage, SongLink, Song } from './styles';

// eslint-disable-next-line import/prefer-default-export
export const SongElement = (props) => {
  const { name, duration, href } = props;
  console.log(props);
  return (
    <Song>
      <SongLink href={href}>
        <SongName>
          {name}
        </SongName>
        <SongDuration>
          {duration}
        </SongDuration>
      </SongLink>
      <SongAddImage src={plusIcon} alt='' />
    </Song>

  );
};
