import React from 'react';
import { SongList } from '../components/SongList/SongList';
// import TabsHeader from '../components/TabsHeader';
// import '../assets/styles/Discover.scss';
import { MusicPlayer } from '../components/MusicPlayer/MusicPlayer';

const Discover = () => (
  <>
    <div className='tabs'>
      {/* <TabsHeader /> */}
      <SongList />
      <MusicPlayer />
    </div>
  </>
);

export default Discover;

