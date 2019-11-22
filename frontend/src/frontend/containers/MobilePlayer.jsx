import React from 'react';
import { connect } from 'react-redux';
import FullPlayer from '../components/MusicPlayer/FullPlayer';

const MobilePlayer = (props) => {
  const {
    playing,
    myList,
    trends,
    originals,
  } = props;
  return (<FullPlayer title="titulo" artist="artista" song={playing.songNumber ? playing.playlist[playing.songNumber] : trends[0]} />);
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(MobilePlayer);
