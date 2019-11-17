/**
 * @author David Behar <david@behar.io>
 */

import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import plusIcon from '../../assets/static/plus-icon.png';
// import plusIcon from '../../assets/static/plus-icon.png';

const Song = styled.li`
  height: 40px;
  display: grid;
  cursor: pointer;
  list-style: none;
  text-decoration: white;
  border-bottom: 1px solid #d8d8d8;
  grid-template-columns: 1fr 40px;
  &:hover,
  &:active {
    background: #5d00f5;
  }
  & a:not([href^="http"]){
    background:#666;
    color:#333;
    cursor:default;
  }
`;

const SongLink = styled.a`
  width: 100%;
  color: white;
  display: grid;
  padding: 10px 0;
  padding-left: 10px;
  text-decoration: none;
  grid-template-columns: 1fr 80px;

`;

const SongName = styled.div`
  white-space: nowrap;
`;
const SongDuration = styled.div`
  justify-self: flex-end;
`;
const SongAddImage = styled.img`
  width: 15px;
  height: 15px;
  align-self: center;
  justify-self: center;
`;
// eslint-disable-next-line import/prefer-default-export

const SongElement = (props) => {
  const {
    name,
    duration,
    href,
    songNumber,
    songs,
    playing,
    myList,
    trends,
    originals,
    playSong,
  } = props;
  const handlePlay = (event) => {
    event.preventDefault();
    console.log('songNumber', songNumber);
    console.log(trends);
    playSong(songNumber, trends);
    // state.originals;
    // addToPlayList(id,playlist);
  };
  // console.log(props);
  return (
    <Song>
      <SongLink href={href} onClick={handlePlay}>
        <SongName>{name}</SongName>
        <SongDuration>{duration}</SongDuration>
      </SongLink>
      <SongAddImage src={plusIcon} alt="" />
    </Song>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    playSong: (songNumber, playlist) => {
      dispatch({
        type: 'PLAY_SONG',
        payload: {
          songNumber,
          playlist,
        },
      });
    },
  };
};
const mapStateToProps = (state) => {
  // console.log('state');
  // console.log(state);
  return {
    playing: state.playing,
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SongElement);
