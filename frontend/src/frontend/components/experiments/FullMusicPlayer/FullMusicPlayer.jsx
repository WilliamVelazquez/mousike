import React from 'react';
// import './FullMusicPlayer.scss';

const FullMusicPlayer = () => {
  return (
    <div className="contain">
      <div className="container">
        <div className="music-player">
          <div className="cover">
            <img
              src="https://grandvincentmarion.github.io/_img/kygo.png"
              alt=""
            />
          </div>
          <div className="titre">
            <h3>Kygo</h3>
            <h1>Stole the show</h1>
          </div>
          <div className="lecteur">
            <audio className="fc-media">
              {/* style="width: 100%;" */}
              <source
                src="https://grandvincentmarion.github.io/_img/kygo-stole-the-show.mp3"
                type="audio/mp3"
              />
            </audio>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullMusicPlayer;
