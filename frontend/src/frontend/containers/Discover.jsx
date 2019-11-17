import React from 'react';
import { connect } from 'react-redux';
import SongList from '../components/SongElements/SongList';

// import TabsHeader from '../components/TabsHeader';
// import '../assets/styles/Discover.scss';
import MusicPlayer from '../components/MusicPlayer/MusicPlayer';
import songs from '../utils/mocks/songs';
import { GlobalStyle } from '../GlobalStyles';
import MobileHeader from '../components/Header/MobileHeader';
import SessionBar from '../components/Header/SesionBar';
// import FullMusicPlayer from '../components/FullMusicPlayer/FullMusicPlayer';

const Discover = ({
  playing,
  myList,
  trends,
  originals }) => {
  console.log(playing);
  console.log(myList);
  console.log(trends);
  console.log(originals);
  return (
    <>
      <div className="tabs">
        {/* <TabsHeader /> */}
        <GlobalStyle />
        <MobileHeader title="DISCOVER" />

        <SongList songs={songs} onChange="" />
        {/* <FullMusicPlayer /> */}
        <MusicPlayer />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Discover);
