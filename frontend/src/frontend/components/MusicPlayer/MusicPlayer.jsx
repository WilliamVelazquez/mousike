import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import repeat from '../../assets/static/repeat.png';
import queue from '../../assets/static/Queue.png';
import fullScreen from '../../assets/static/fullscreen.png';
import coverImage from '../../assets/img/album-1.jpg';
import Player from './Player/Player';

const AudioPlayer = styled.div`
  background-color: #262930;
  display: grid;
  grid-template-columns: 200px 1fr ;
  justify-content: space-evenly; //alineado horizontal
  align-content: space-around; //alineado vertical
  justify-items: center; //horizontal
  grid-gap: 10px;
  padding: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const CoverImage = styled.img`
  max-width: 36px;
  max-height: 36px;
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
  /* grid-auto-flow: column;   */
  grid-template-columns: 1fr 2fr;
  align-items: center;
  grid-gap: 10px;
`;
const PlayingArtist = styled.div`
  font-size: 9px;
`;

const PlayingSong = styled.div`
  font-size: 8px;
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
    imageUrl = '';

  if (props.playing.songNumber) {
    const { playing } = props;
    const song = playing.playlist[playing.songNumber];
    const { images } = song;
    imageUrl = images[0].url;
    console.log('props.playing.songNumber', props.playing.songNumber);
    console.log('song', song);
    name = song.name;
    artist = song.artist;
    const hello = 'world';
    // song = playing.playlist[playing.songNumber];
    // name = song.name;
    // name = song.name;
  }
  // const song = playing.playlist[playing.songNumber];
  // const { preview, name, album, images, artist } = song;
  return (
    <>
      <nav>
        <AudioPlayer>
          <SongPlaying>
            <CoverImage src={imageUrl} alt="" srcSet="" />
            <div className="PlayingInfo">
              <PlayingArtist>{artist}</PlayingArtist>
              <PlayingSong>{name}</PlayingSong>
              {/* <div>{hello}</div> */}
            </div>
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
