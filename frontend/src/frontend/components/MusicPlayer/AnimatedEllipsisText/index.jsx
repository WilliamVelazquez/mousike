import React from 'react';
import styled from 'styled-components';

const SongDataBox = styled.div`
  /* width: 10em; */
  /* height: 3em; */
  /* color: white; */
  /* margin-top: 2em; */
  /* margin-bottom: 2em; */
  display: flex;
  overflow: hidden;
  flex-direction: row;
  align-items: center;
  color: ${props => props.textColor || '#FFFFFF'};
  background-color: ${props => props.backgroundColor || '#262930'};
`;

const SongDataWrapper = styled.div`
  width: ${props => props.maxWidth || '135px'};
  display: flex;
  flex: 1 0 100%;
  overflow: hidden;
  text-overflow: inherit;
`;

const PlayingSong = styled.span`
  /* width: 135px; */
  /* height: auto; */
  /* flex: 1 0 100%; */
  /* display: block; */
  font-size: ${props => props.textSize || '11px'};
  overflow: hidden;
  font-weight: ${props => props.textWeight || 'bold'};
  white-space: nowrap;
  text-overflow: ellipsis;
  ${SongDataBox}:hover & {
    transition: ${props => props.animationTime || '2s'};
    overflow: inherit;
    margin-left: -130%;
    text-overflow: inherit;
    transition-timing-function: linear;
  }
  @media (max-width: 480px) {
    font-size: ${props => props.textResponsiveSize || '9px'};
  }
`;

SongDataBox.defaultProps = {
  textColor: '#FFFFFF',
  backgroundColor: '#262930',
};
SongDataWrapper.defaultProps = {
  maxWidth: '135px',
};
PlayingSong.defaultProps = {
  textSize: '11px',
  textWeight: '400',
  animationTime: '2.5s',
  textResponsiveSize: '9px',
};

const AnimatedEllipsisText = (props) => {
  const { maxWidth, textColor, backgroundColor, textSize, textResponsiveSize, animationTime, textWeight, text } = props;
  return (
    <SongDataBox textColor={textColor} backgroundColor={backgroundColor}>
      <SongDataWrapper maxWidth={maxWidth}>
        <PlayingSong
          textSize={textSize}
          textWeight={textWeight}
          animationTime={animationTime}
          textResponsiveSize={textResponsiveSize}
        >
          {text}
        </PlayingSong>
      </SongDataWrapper>
    </SongDataBox>
  );
};

export default AnimatedEllipsisText;
