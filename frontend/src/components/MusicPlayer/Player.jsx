/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-alert */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-string-refs */
import React from 'react';
import styled from 'styled-components';
// import loadFiles from '../files';
const AudioPlayer = styled.audio``;
const PlayerWrapper = styled.div`
    margin: 15px 0;
    width: 100%;
    height: 50px;
    position: relative;
    display: grid;
    grid-template-columns: 110px 1fr;
    grid-gap: 10px;
`;
const Controls = styled.div`
    float: left;
`;
const ControlsButton = styled.button`
  background: none;
  border: none;

  text-decoration: none;
  height: 50px;
  width: 34px;
  box-sizing: border-box;
  text-align: center;
  padding: 17px 10px;
  float: left;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #084380;
    color: #b3b3b3;
  } 
`;

const Progress = styled.div`
    position: absolute;
    left: 102px;
    top: 15px;
    right: 100px;
    bottom: 15px;
    background: black;
    cursor: pointer;
    /* width: 100%; */
`;
const Bar = styled.div`
    position: absolute;
    left: 5px;
    right: 5px;
    top: 5px;
    bottom: 5px;
    & > div{
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      /* width: 50%; */
      width: '0%';
      background: white;    
    }
`;
const Time = styled.div`
  position: absolute;
  right: 0;
  width: 100px;
  color: white;
  font-size: 12px;
  padding-top: 17px;
  text-align: center;
`;

function offsetLeft(el) {
  let element = el;
  let left = 0;
  while (element && element !== document) {
    left += element.offsetLeft;
    element = element.offsetParent;
  }
  return left;
}

function formatToNumber(num) {
  const str = `${num}`;
  if (str.length === 1) {
    return 0 + str;
  }
  if (str.length === 0) {
    return '00';
  }
  return str;
}

function formatTime(s, showHours) {
  const totalSeconds = Math.floor(s);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor(s / 60) - hours * 60;
  const seconds = totalSeconds - minutes * 60 - hours * 3600;

  if (hours || showHours) {
    return `${(hours)}:${formatToNumber(minutes)}:${formatToNumber(seconds)}`;
  }
  return `${formatToNumber(minutes)}:${formatToNumber(seconds)}`;

}

class Player extends React.Component {
  constructor() {
    super();
    this.state = {
      file: encodeURI('https://archive.org/download/vs3s02e01/format=VBR+MP3&ignore=x.mp3'),
      playing: false,
      progress: 0.03,
      humanTime: '00:00',
    };
    this.count = 0;

  }

  onUpdate() {
    const { playing } = this.state;
    if (playing) {
      const { player } = this.refs;
      this.setState({
        progress: player.currentTime / player.duration,
      });
      const humanTime = formatTime(player.currentTime);
      // console.log(humanTime);
      this.setState({ humanTime });
      // console.log((player.currentTime));
      if (player.ended) {
        console.log('song ended');
      }
    }

  }

  previousSongHandler(event) {
    event.preventDefault();
    alert('a');
  }

  nextSongHandler(event) {
    event.preventDefault();
    alert('b');
  }

  setProgress(event) {
    event.preventDefault();
    const { player } = this.refs;
    const { progressBar } = this.refs;
    const offset = offsetLeft(progressBar);
    const progress = ((event.clientX - offset) / progressBar.clientWidth);

    player.currentTime = player.duration * progress;

    // console.log(offset, event.clientX, progressBar.clientWidth, progress);
    this.setState({ progress });
  }

  togglePlay() {
    const { player } = this.refs;
    if (player.paused) {
      player.play();
      this.setState({
        playing: true,
      });
      // setTimeout(() => {
      //   const { player } = this.refs;
      //   player.src = 'https://archive.org/download/20191111_20191111_0757/format=VBR+MP3&ignore=x.mp3';
      //   player.play();
      // }, 2000);
    } else {
      player.pause();
      this.setState({
        playing: false,
      });
    }
    // console.log(player.paused);
  }

  componentDidMount() {
    this.interval_id = setInterval(this.onUpdate.bind(this), 250);
  }

  render() {
    const { playing } = this.state;
    const { file } = this.state;
    const { player } = this.refs;
    const { progress } = this.state;
    const { humanTime } = this.state;
    if (player && player.currentSrc !== file) {
      player.src = file;
    }

    return (
      <PlayerWrapper className='player'>
        <Controls className='controls'>
          <ControlsButton type='button' onClick={this.previousSongHandler.bind(this)}>
            <i className='fa fa-chevron-left' aria-hidden='true' />
          </ControlsButton>
          <ControlsButton type='button' onClick={this.togglePlay.bind(this)}>
            <i className={playing ? 'fa fa-pause' : 'fa fa-play'} aria-hidden='true' />
          </ControlsButton>
          <ControlsButton type='button' onClick={this.nextSongHandler.bind(this)}>
            <i className='fa fa-chevron-right' aria-hidden='true' />
          </ControlsButton>
        </Controls>
        <div>
          <Progress
            onClick={this.setProgress.bind(this)}
            className='progress'
          >
            <Bar className='bar' ref='progressBar'>
              <div style={{ width: `${progress * 100}%` }} />
            </Bar>
          </Progress>
          <Time className='time'>
            {humanTime}
          </Time>

        </div>
        <AudioPlayer ref='player'>
          <source src={file} />
          <track
            default
            kind='captions'
          />
        </AudioPlayer>
      </PlayerWrapper>
    );
  }
}

export default Player;
