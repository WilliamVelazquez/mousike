import React from 'react';
// import './MusicPlayer.scss';
// import pause from '../../assets/static/pause.png';
import repeat from '../../assets/static/repeat.png';
import queue from '../../assets/static/Queue.png';
import fullScreen from '../../assets/static/fullscreen.png';
import coverImage from '../../assets/img/album-1.jpg';

import {
  AudioPlayer,
  CoverImage,
  PlayingInfo,
  PlayingSong,
  ExtraActions,
  SongPlaying,
} from './styles';
import ControlsStacked from './ControlsStacked';

const { PlayingArtist } = AudioPlayer;

// const TimeSlider = <input type='range' min='0' max='100' step='1' value='50' className='timeSlider' />;
export const MusicPlayer = (props) => { // eslint-disable-line import/prefer-default-export
  return (
    <>
      <div>
        <AudioPlayer>
          <SongPlaying>
            <CoverImage src={coverImage} alt='' srcSet='' />
            <PlayingInfo>
              <PlayingArtist>The who</PlayingArtist>
              <PlayingSong>I'm free - Live</PlayingSong>
            </PlayingInfo>
          </SongPlaying>
          <ControlsStacked />
          <ExtraActions>
            <div className='prev-song'>
              <img src={repeat} alt='' srcSet='' />
            </div>
            <div className='play-pause'>
              <img src={queue} alt='' srcSet='' />
            </div>
            <div className='next-song'>
              <img src={fullScreen} alt='' srcSet='' />
            </div>
          </ExtraActions>
        </AudioPlayer>
      </div>

    </>
  );
};

// export default MusicPlayer;
