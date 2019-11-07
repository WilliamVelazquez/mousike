import React from 'react';
import { SongList } from '../components/SongList/SongList';
// import TabsHeader from '../components/TabsHeader';
// import '../assets/styles/Discover.scss';
import { MusicPlayer } from '../components/MusicPlayer/MusicPlayer';
import songs from '../utils/mocks/songs';
import { GlobalStyle } from '../GlobalStyles';

const Discover = () => (
  <>
    <div className='tabs'>
      {/* <TabsHeader /> */}
      <GlobalStyle />
      <SongList songs={songs} onChange='' />
      <MusicPlayer />
    </div>
  </>
);

export default Discover;

