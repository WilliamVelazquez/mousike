import React from 'react';
import './FullMusicPlayer.scss';
// import './script.js';
// import 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js';
// import 'https://cdnjs.cloudflare.com/ajax/libs/mediaelement/4.2.7/mediaelement-and-player.min.js';

const FullMusicPlayer = () => {

  return (
    <div className='contain'>
      <link rel='stylesheet' href='https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css' />
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/mediaelement/4.2.7/mediaelementplayer.min.css' />
      <div className='container'>
        <div className='music-player'>
          <div className='cover'>
            <img src='https://grandvincentmarion.github.io/_img/kygo.png' alt='' />
          </div>
          <div className='titre'>
            <h3>Kygo</h3>
            <h1>Stole the show</h1>
          </div>
          <div className='lecteur'>
            <audio className='fc-media'>
              {/* style="width: 100%;" */}
              <source src='https://grandvincentmarion.github.io/_img/kygo-stole-the-show.mp3' type='audio/mp3' />
            </audio>
          </div>
        </div>
      </div>
      {/* <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js' />
      <script src='https://cdnjs.cloudflare.com/ajax/libs/mediaelement/4.2.7/mediaelement-and-player.min.js' /> */}
      <script />
    </div>
  );
};

export default FullMusicPlayer;
