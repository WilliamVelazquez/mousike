import React from 'react';
// import './MusicPlayer.scss';
import play from '../../assets/static/Play.png';
// import pause from '../../assets/static/pause.png';
import prev from '../../assets/static/rewind-left.png';
import next from '../../assets/static/rewind-right.png';
import repeat from '../../assets/static/repeat.png';
import queue from '../../assets/static/Queue.png';
import fullScreen from '../../assets/static/fullscreen.png';
import coverImage from '../../assets/img/album-1.jpg';

import {
  AudioPlayer,
  CoverImage,
  PlayingInfo,
  PlayingSong,
  ControlsStacked,
  MainControls,
  TimeSection,
  Slider,
  ExtraActions,
  SongPlaying,
} from './styles';

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

          <ControlsStacked onClick={(event) => { console.log(event.target.getBoundingClientRect().width); }}>

            <MainControls>
              <div className='prev-song'>
                <img src={prev} alt='' srcSet='' />
              </div>
              <div className='play-pause'>
                <img src={play} alt='' srcSet='' />
              </div>
              <div className='next-song'>
                <img src={next} alt='' srcSet='' />
              </div>
            </MainControls>

            <TimeSection>
              {/* <span className='current-time'>0:00</span> */}
              <Slider data-direction='horizontal'>
                <input type='range' min='0' max='100' step='1' value='50' className='timeSlider' />
              </Slider>
              <span className='remaining-time'>0:00</span>
            </TimeSection>

          </ControlsStacked>

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

// const input = document.querySelector('.timeSlider');
// function handleUpdateSliderInput(input) {
//   input.style.setProperty('--value', input.value);
// }
// handleUpdateSliderInput(input);

// input.addEventListener('input', () => {
//   handleUpdateSliderInput(input);
// }, false);

