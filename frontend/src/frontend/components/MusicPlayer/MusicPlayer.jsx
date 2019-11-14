import React from 'react';
import styled from 'styled-components';
import repeat from '../../assets/static/repeat.png';
import queue from '../../assets/static/Queue.png';
import fullScreen from '../../assets/static/fullscreen.png';
import coverImage from '../../assets/img/album-1.jpg';
import Player from './Player';

const AudioPlayer = styled.div`
  background-color: #262930;
  display: grid;
  grid-template-columns: 100px 1fr 100px;
  justify-content: space-evenly; //alineado horizontal
  align-content: space-around; //alineado vertical
  justify-items: center; //horizontal
  grid-gap: 10px;
  padding: 20px;
  position: absolute;
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
export const MusicPlayer = () => {
  // eslint-disable-line import/prefer-default-export
  return (
    <>
      <nav>
        <AudioPlayer>
          <SongPlaying>
            <CoverImage src={coverImage} alt="" srcSet="" />
            <div className="PlayingInfo">
              <PlayingArtist>The who</PlayingArtist>
              <PlayingSong>Im free - Live</PlayingSong>
            </div>
          </SongPlaying>
          <Player />
          <ExtraActions>
            <div className="prev-song">
              <img src={repeat} alt="" srcSet="" />
            </div>
            <div className="play-pause">
              <img src={queue} alt="" srcSet="" />
            </div>
            <div className="next-song">
              <img src={fullScreen} alt="" srcSet="" />
            </div>
          </ExtraActions>
        </AudioPlayer>
      </nav>
    </>
  );
};

export default MusicPlayer;
