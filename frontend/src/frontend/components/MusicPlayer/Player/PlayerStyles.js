import styled from 'styled-components';

export const AudioPlayer = styled.audio``;
export const PlayerWrapper = styled.div`
    margin: 15px 0;
    width: 100%;
    height: 50px;
    position: relative;
    display: grid;
    grid-template-columns: 110px 1fr;
    grid-gap: 10px;
`;
export const Controls = styled.div`
    float: left;
`;
export const ControlsButton = styled.button`
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

export const Progress = styled.div`
    position: absolute;
    left: 102px;
    top: 15px;
    right: 100px;
    bottom: 15px;
    background: black;
    cursor: pointer;
    /* width: 100%; */
`;
export const Bar = styled.div`
    position: absolute;
    left: 5px;
    right: 5px;
    top: 5px;
    bottom: 5px;
    & > div{
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      /* width: 50%; */
      width: '0%';
      background: white;    
    }
`;
export const Time = styled.div`
  position: absolute;
  right: 0;
  width: 100px;
  color: white;
  font-size: 12px;
  padding-top: 17px;
  text-align: center;
`;
