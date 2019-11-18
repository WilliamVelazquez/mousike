import React from 'react';
import styled from 'styled-components';

const PlaylistWrapper = styled.div`
    width: fit-content;
    float: left;
    padding: 0;
    margin: 0;
    height:200px;
    
`;
const ImageWrapper = styled.figure`
padding: 0;
    margin: 10px;
    max-width:138px;
    max-height:138px;
    & img{
        width: 100%;
        height: auto;
    }
`;
const InfoWrapper = styled.div`
    font-size:11px;
    width: 138px;
`;

const Playlist = (props) => {
  const { src, name } = props || '';
  return (
    <PlaylistWrapper>
      <ImageWrapper>
        <img src={src} alt={name} />
      </ImageWrapper>
      <InfoWrapper>
        {/* <p className="title">{props.name.substring(0, 100);}</p> */}
        <p className="followers">{props.name}</p>
      </InfoWrapper>
    </PlaylistWrapper>
  );
};

export default Playlist;
