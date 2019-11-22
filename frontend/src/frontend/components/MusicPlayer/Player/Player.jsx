
import React from 'react';
import { connect } from 'react-redux';
// import loadFiles from '../files';
import {
  AudioPlayer,
  PlayerWrapper,
  Controls,
  ControlsButton,
  Progress,
  Bar,
  Time,
} from './PlayerStyles';

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

  constructor(props) {
    super();
    const { playing } = props;

    this.state = {
      file: encodeURI('https://archive.org/download/vs3s02e01/format=VBR+MP3&ignore=x.mp3'),
      isPlaying: false,
      playing,
      progress: 0.006,
      humanTime: '00:00',
      isMobile: true,
    };
    this.count = 0;

  }

  previousSongHandler(event) {
    event.preventDefault();
    const { songNumber } = this.state.playing;
    this.prevSong(songNumber);
    // alert('a');
  }

  nextSongHandler(event) {
    event.preventDefault();
    const { songNumber } = this.state.playing;
    this.nextSong(songNumber);
    // alert('b');
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

  nextSong(number) {
    const songNumber = number + 1;
    const { playing } = this.state;
    const url = playing.playlist[(songNumber)].preview;
    if (url) {
      console.log('encontrando cancion', songNumber);
      this.props.playing.songNumber = songNumber;
      this.setState({
        playing: {
          songNumber: this.props.playing.songNumber,
        },
      });
    } else {
      const maxSongs = this.state.playing.playlist.length;
      if (songNumber < maxSongs - 1) {
        this.nextSong(songNumber);
      } else {
        this.nextSong(-1);
      }
    }
  }

  prevSong(number) {
    const songNumber = number - 1;
    const { playing } = this.state;
    const url = playing.playlist[(songNumber)].preview;
    if (url) {
      console.log('encontrando cancion', songNumber);
      this.props.playing.songNumber = songNumber;
      this.setState({
        playing: {
          songNumber: this.props.playing.songNumber,
        },
      });
    } else {
      const lastSong = this.state.playing.playlist.length;
      if (songNumber > 0) {
        this.prevSong(songNumber);
      } else {
        this.prevSong(lastSong);
      }
    }
  }

  play() {
    console.log('playing');
    const { player } = this.refs;
    const { isPlaying } = this.state;
    if (this.state.file) {
      if (isPlaying) {
        this.pause();
        setTimeout(() => {
          player.play().then((response) => {
            this.setState({
              isPlaying: true,
            });
          })
            .catch(
              (err) => {
                console.log(err);
              },
            );
        }, 0);

      } else {
        player.play().then(
          () => {
            this.setState({
              isPlaying: true,
            });
          },
        );
      }

    } else {
      // this.nextSong();
    }
  }

  pause(cb) {
    console.log('pausing');
    if (this.state.isPlaying) {
      const { player } = this.refs;
      player.pause();
      this.setState({
        isPlaying: false,
      }, () => {
        cb && cb();
      });
      //   },
      // );
    }
  }

  togglePlay() {
    const { player } = this.refs;
    if (player.paused) {
      this.play();
    } else {
      this.pause();
    }
  }

  componentDidMount() {
    this.interval_id = setInterval(this.onUpdate.bind(this), 250);
    // const { documentLoaded } = this.state;
    if (document) { this.isMobile = !(document.body.clientWidth > 550); }
  }

  onUpdate() {
    const { playing: playingTemp } = this.props;
    this.setState({ playing: playingTemp });
    const { playing } = this.state;
    if (playing.songNumber &&
      playing.playlist[(playing.songNumber)].preview !== this.state.file) {
      this.setState({
        file: encodeURI(playing.playlist[(playing.songNumber)].preview),
      }, this.play.bind(this));
    }

    if (this.state.isPlaying) {
      const { player } = this.refs;
      if (this.refs && player && player.currentTime) {
        this.setState({
          progress: player.currentTime ? player.currentTime / player.duration : null,
        });
        const humanTime = formatTime(player.currentTime);
        this.setState({ humanTime });
        if (player.ended) {
          console.log('song ended');
          this.nextSong(this.state.playing.songNumber);
        }
      }
    }

  }

  render() {
    const { isPlaying } = this.state;
    const { file } = this.state;
    const { player } = this.refs;
    const { progress } = this.state;
    const { humanTime } = this.state;
    if (player && player.currentSrc !== file) {
      player.src = file;
    }

    return (
      <PlayerWrapper className="player">
        <Controls className="controls">
          <ControlsButton type="button" onClick={this.previousSongHandler.bind(this)}>
            <i className="fa fa-chevron-left" aria-hidden="true" />
          </ControlsButton>
          <ControlsButton type="button" onClick={this.togglePlay.bind(this)}>
            <i className={isPlaying ? 'fa fa-pause' : 'fa fa-play'} aria-hidden="true" />
          </ControlsButton>
          <ControlsButton type="button" onClick={this.nextSongHandler.bind(this)}>
            <i className="fa fa-chevron-right" aria-hidden="true" />
          </ControlsButton>
        </Controls>
        {!this.isMobile ? (
          <Progress
            onClick={
              this.setProgress.bind(this)
            }
            className="progress"
          >
            <Bar className="bar" ref="progressBar">
              <div style={{ width: `${progress * 100}%` }} />
            </Bar>
          </Progress>
        ) : '' }
        <Time className="time">
          {humanTime}
        </Time>
        <AudioPlayer ref="player" id="player">
          <source src={file} />
          <track
            default
            kind="captions"
          />
        </AudioPlayer>
      </PlayerWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Player);
