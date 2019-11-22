import React from 'react';
import styled from 'styled-components';

const ControlsWrapper = styled.div`
    float: left;
`;
const ControlsButton = styled.button`
  background: none;
  border: none;

  text-decoration: none;
  height: 50px;
  width: 34px;
  box-sizing: border-box;
  text-align: center;
  padding: 17px 10px;
  float: left;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #084380;
    color: #b3b3b3;
  } 
`;

const Controls = (props) => {
  const { previousSongHandler, togglePlayHandler, nextSongHandler } = props;
  return (
    <ControlsWrapper className="controls">
      <ControlsButton type="button" onClick={previousSongHandler}>
        <i className="fa fa-chevron-left" aria-hidden="true" />
      </ControlsButton>
      <ControlsButton type="button" onClick={togglePlayHandler}>
        <i className={isPlaying ? 'fa fa-pause' : 'fa fa-play'} aria-hidden="true" />
      </ControlsButton>
      <ControlsButton type="button" onClick={nextSongHandler}>
        <i className="fa fa-chevron-right" aria-hidden="true" />
      </ControlsButton>
    </ControlsWrapper>
  );
};

