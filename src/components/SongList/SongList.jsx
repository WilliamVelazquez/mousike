/**
 * @author David Behar <david@behar.io>
 */

import React from 'react';
import { SongListStyle } from './styles';
import { SongElement } from '../SongElement/SongElement';

// eslint-disable-next-line import/prefer-default-export
export const SongList = (props) => {
  const { songs } = props;
  return (
    <SongListStyle>
      {
        songs &&
        songs.map((song) => {
          const { name, duration, href, key } = song;
          console.log(song);
          return (
            <SongElement
              key={key}
              name={name}
              duration={duration}
              href={href}
            />
          );
        })
      }
    </SongListStyle>
  );

};
