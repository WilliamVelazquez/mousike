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

const Discover = (props) => {
  const {
    playing,
    myList,
    trends,
    originals,
    artists } = props;
  // console.log(playing);
  // console.log(myList);
  // console.log(trends);
  // console.log(originals);
  return (
    <>
      <div className="tabs">
        {/* <TabsHeader /> */}
        <GlobalStyle />
        <MobileHeader title="DISCOVER" />
        {
          Object.entries(artists).map(
            (artist) => {
              const albumImage = artist[1][0].images[1].url;
              const artistName = artist[1][0].artist;
              console.log(albumImage);
              console.log(artistName);
              // return <img src={albumImage} alt={artistName} />;
            },
          )

          // Object.keys(artists).map((key) => {
          //   console.log('key', key);
          //   // console.log('index', index);
          //   console.log(artists[key]);
          //   return artists[key];
          // })

          // artists.map((artist) => {
          //   return <div>Hello world</div>;
          // })
        }
        {/* {artists.map((artist)) => <div>hey</div>)} */}
        {
          // artists ?
          //   <></>
          // artists.map((item, key) => <div item={item} key={item} />) :
          // ''

        }
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
    artists: state.artists,
  };
};

export default connect(mapStateToProps, null)(Discover);
