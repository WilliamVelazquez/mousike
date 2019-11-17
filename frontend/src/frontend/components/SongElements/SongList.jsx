/**
 * @author David Behar <david@behar.io>
 */

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import SongElement from './SongElement';

const SongListStyle = styled.ol`
  margin: 0;
  padding-inline-start: 0;
`;

// eslint-disable-next-line import/prefer-default-export
const SongList = ({
  songs,
  playing,
  myList,
  trends,
  originals }) => {

  console.log(songs);
  console.log(playing);
  console.log(myList);
  console.log(trends);
  console.log(originals);
  return (
    <SongListStyle>
      {trends &&
        trends.map((song, index) => {
          // console.log(song);
          const { name, preview: href, _id: key, durationStr } = song;
          // console.log(song);
          return (
            <SongElement
              key={key}
              name={name}
              duration={durationStr}
              href={href}
              songNumber={index}
            />
          );
        })}

    </SongListStyle>
  );
};

const mapStateToProps = (state) => {
  console.log('state');
  console.log(state);
  return {
    playing: state.playing,
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(SongList);
