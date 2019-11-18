import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SongList from '../components/SongElements/SongList';

// import TabsHeader from '../components/TabsHeader';
// import '../assets/styles/Discover.scss';
import MusicPlayer from '../components/MusicPlayer/MusicPlayer';
import songs from '../utils/mocks/songs';
import { GlobalStyle } from '../GlobalStyles';
import MobileHeader from '../components/Header/MobileHeader';
import SessionBar from '../components/Header/SesionBar';
import Playlist from '../components/Playlist';
// import FullMusicPlayer from '../components/FullMusicPlayer/FullMusicPlayer';

const Discover = (props) => {
  const PlaylistWrapper = styled.article`
    padding:0 50px;
    /* display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 1fr 1fr 1fr; */
  `;
  const PlaylistTitle = styled.p`
    font-size:14px;
    font-weight:bold;
  `;
  const BigHeader = styled.h1`
    font-size:3em;
    padding:30px 0;
  `;

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
        <PlaylistWrapper>
          <BigHeader>Descubre</BigHeader>
          <p>Artistas</p>
          {
            Object.entries(artists).map(
              (artist, i) => {
                const albumImage = artist[1][0].images[1].url;
                const artistName = artist[1][0].artist;
                console.log(albumImage);
                console.log(artistName);
                if (i < 9) {
                  return (
                    <Playlist src={albumImage} name={artistName} />
                  );
                }
              },
            )
          }
        </PlaylistWrapper>
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
