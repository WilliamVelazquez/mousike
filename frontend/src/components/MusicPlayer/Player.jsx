/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-alert */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-string-refs */
import React from 'react';
import styled from 'styled-components';
import './Player.css';
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

function offsetLeft(el) {
  let left = 0;
  while (el && el !== document) {
    left += el.offsetLeft;
    el = el.offsetParent;
  }
  return left;
}

class Player extends React.Component {
  constructor() {
    super();
    this.state = {
      file: encodeURI('https://archive.org/download/vs3s02e01/format=VBR+MP3&ignore=x.mp3'),
      playing: false,
      progress: '2%',
    };
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
    console.log(player.paused);
  }

  render() {
    const { playing } = this.state;
    const { file } = this.state;
    const { player } = this.refs;
    const { progress } = this.state;
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
          <Progress onClick={this.setProgress.bind(this)} className='progress'>
            <Bar className='bar' ref='progressBar'>
              <div style={{ width: `${progress * 100}%` }} />
            </Bar>
          </Progress>

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
