import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import repeat from '../../assets/static/repeat.png';
import queue from '../../assets/static/Queue.png';
import fullScreen from '../../assets/static/fullscreen.png';
import coverImage from '../../assets/img/album-1.jpg';
import Player from './Player/Player';
import AnimatedEllipsisText from './AnimatedEllipsisText';

const AudioPlayer = styled.div`
  background-color: #262930;
  display: grid;
  grid-template-columns: 200px 1fr ;
  justify-content: space-evenly; //alineado horizontal
  align-content: space-around; //alineado vertical
  justify-items: center; //horizontal
  grid-gap: 10px;
  padding: 4px 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const CoverImage = styled.img`
  width: 65px;
  height: 65px;
  max-width: 65px;
  max-height: 65px;
  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
    max-width: 45px;
    max-height: 45px;
  }
`;

const ExtraActions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100px;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
`;

const SongPlaying = styled.div`
  color: white;
  display: grid;
  grid-gap: 5px;
  align-items: center;
  justify-items: center;
  /* align-items: center; */
  /* grid-auto-flow: column;   */
  grid-template-columns: 1fr 2fr;
`;

const PlayingData = styled.div`
  display: grid;
  grid-gap: 5px;
`;
// const icon = {
//   width: '11px',
//   height: '11px',
// };
const MusicPlayer = (props) => {
  // eslint-disable-line import/prefer-default-export
  // console.log('props', props);
  // const { playing } = props.state;
  // console.log('playing', playing);
  let
    artist,
    name,
    imageUrl = '',
    alt='';

  if (props.playing.songNumber) {
    const { playing } = props;
    const song = playing.playlist[playing.songNumber];
    const { images } = song;
    imageUrl = images[0].url;
    console.log('props.playing.songNumber', props.playing.songNumber);
    console.log('song', song);
    name = song.name;
    artist = song.artist;
    alt = song.album;
    // song = playing.playlist[playing.songNumber];
  }
  // const song = playing.playlist[playing.songNumber];
  // const { preview, name, album, images, artist } = song;
  return (
    <>
      <nav>
        <AudioPlayer>
          <SongPlaying>
            <CoverImage src={imageUrl} alt={alt} srcSet="" />
            <PlayingData>
              <AnimatedEllipsisText text={name} textWeight="bold" />
              <AnimatedEllipsisText text={artist} textSize="9px" textResponsiveSize="8px" />
            </PlayingData>
          </SongPlaying>
          <Player />
          {/* <ExtraActions>
            <div className="prev-song">
              <img src={repeat} alt="" srcSet="" />
            </div>
            <div className="play-pause">
              <img src={queue} alt="" srcSet="" />
            </div>
            <div className="next-song">
              <img src={fullScreen} alt="" srcSet="" />
            </div>
          </ExtraActions> */}
        </AudioPlayer>
      </nav>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(MusicPlayer);
