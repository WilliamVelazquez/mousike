/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-alert */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-string-refs */
import React from 'react';
import './Player.css';
// import loadFiles from '../files';

class Player extends React.Component {
  constructor() {
    super();
    this.state = {
      file: encodeURI('https://archive.org/download/vs3s02e01/format=VBR+MP3&ignore=x.mp3'),
      playing: false,
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

  play(event) {
    const { player } = this.refs;
    player.play();
    event.preventDefault();
  }

  pause(event) {
    const { player } = this.refs;
    player.pause();
    event.preventDefault();
  }

  togglePlay() {
    const { player } = this.refs;
    if (player.paused) {
      player.play();
      this.setState({
        playing: true,
      });
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
    return (
      <div className='player'>
        <div className='controls'>
          <button type='button' onClick={this.previousSongHandler.bind(this)}>
            {' '}
            <i className='fa fa-chevron-left' aria-hidden='true' />
          </button>
          <button type='button' onClick={this.togglePlay.bind(this)}>
            {' '}
            <i className={playing ? 'fa fa-pause' : 'fa fa-play'} aria-hidden='true' />
          </button>
          <button type='button' onClick={this.nextSongHandler.bind(this)}>
            {' '}
            <i className='fa fa-chevron-right' aria-hidden='true' />
          </button>
        </div>
        <div>
          <div className='progress'>
            <div className='bar'>
              <div />
            </div>
          </div>

        </div>
        <audio ref='player'>
          <source src={file} />
          <track
            default
            kind='captions'
          />
        </audio>
      </div>
    );
  }
}

export default Player;
