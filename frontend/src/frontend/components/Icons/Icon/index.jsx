import React from 'react';
import styled from 'styled-components';

const IconImage = styled.svg`
  transition-duration: 0.4s;
  -o-transition-duration: 0.4s; /* Opera */
  -moz-transition-duration: 0.4s; /* Mozilla */
  -webkit-transition-duration: 0.4s; /* Safari */
  /* color: ${props => props.textColor || '#ffffff'};
  background-color: ${props => props.background};
  font-size: ${props => props.textSize || '16px'}; */
  /* font-weight: ${props => props.textWeight || 'bold'}; */
  &:hover{
    fill: ${props => props.hoverColor || '#000000'};
    /* background: #fff;
    transition: background 0.2s ease-out;
    color: ${props => props.background || '#000000'}; */
    /* box-shadow:  0px 4px 6px 0px rgba(0,0,0,0.4); */
  }
`;

IconImage.defaultProps = {
  color: '#ffffff',
  size: 32,
  hoverColor: '#26FFAB',
};

const Icon = (props) => {
  const { color, size, hoverColor, children } = props;
  return (
    <IconImage
      fill={color}
      height={size}
      width={size}
      viewBox="0 0 32 32"
      hoverColor={hoverColor}
    >
      {children}
    </IconImage>
  );
};

export default Icon;
