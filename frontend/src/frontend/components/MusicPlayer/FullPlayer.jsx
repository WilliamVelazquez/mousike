import React from 'react';
import styled from 'styled-components';
import Player from './Player/Player';
import { GlobalStyle } from '../../GlobalStyles';

const MainContainer = styled.main`
    color: #0B0B0B;
    font-family: "Roboto Mono", monospace;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    perspective: 1000px;
    transform-style: preserve-3d;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    align-content: center;
    position: relative;
    width: 100%;
    height: 100%;
    padding: 12px;
`;

const Container = styled.div`
    color: #0B0B0B;
    font-family: "Roboto Mono", monospace;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    transform-style: preserve-3d;
`;

const PlayerWrapper = styled.div`
    color: #0B0B0B;
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    position: relative;
    z-index: 3;
    width: 100%;
    max-width: 600px;
   
`;

const FrontArt = styled.img`
    color: #0B0B0B;
    
    width: 100%;
`;

const ControlsTop = styled.div`
    color: #0B0B0B;
    font-family: "Roboto Mono", monospace;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    transform-style: preserve-3d;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    align-content: center;
    width: 100%;
    justify-content: space-around;
    padding: 12px;
`;
const ControlsButton = styled.a`
    color: white;
`;
const Info = styled.div`
    color: white; 
    text-align: center;
    padding: 12px;

`;

const FullPlayer = (props) => {
  const { song } = props;
  console.log(song);
  //   const { prevHandler, nextHandler, togglePlayHandler, song, img } = props;
  //   const { name, artist } = song;
  return (
    <MainContainer className="pre-enter">
      <GlobalStyle />
      <div className="background">
        <div />
      </div>
      <Container className="container">
        <PlayerWrapper className="player">
          <div className="front">
            <FrontArt className="art" alt="art" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/345377/thousand-thursday%402x.jpg" />
            <Player />
            <div className="meta">
              <ControlsTop className="controls top">
                <ControlsButton href="/" className="rewind skip">
                  <i style={{ 'fontSize': '30px' }} className="fas fa-backward" />
                </ControlsButton>
                <ControlsButton href="/" className="play">
                  <i style={{ 'fontSize': '40px', 'marginTop': '3px' }} className="fas fa-play" />
                </ControlsButton>
                <ControlsButton href="/" className="forward skip">
                  <i style={{ 'fontSize': '30px' }} className="fas fa-forward" />
                </ControlsButton>
              </ControlsTop>
              <Info className="info">
                {/* <h1>{name}</h1>
                <h2>{artist}</h2> */}
              </Info>

            </div>
          </div>
        </PlayerWrapper>
      </Container>
    </MainContainer>
  );
};

export default FullPlayer;
