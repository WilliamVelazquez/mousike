import React from 'react';
import styled from 'styled-components';

const SocialMediaButton = styled.button`
  width: 100%;
  cursor: pointer;
  padding: 15px 40px;
  border-radius: 30px;
  color: ${props => props.textColor || '#ffffff'};
  background-color: ${props => props.background};
  font-size: ${props => props.textSize || '16px'};
  font-weight: ${props => props.textWeight || 'bold'};
  &:hover{
    /* background: #fff;
    transition: background 0.2s ease-out;
    color: ${props => props.background || '#000000'}; */
    box-shadow:  0px 4px 6px 0px rgba(0,0,0,0.4);
  }
`;

SocialMediaButton.defaultProps = {
  background: '#26FFAB',
};

const SocialMediaLoginButton = (props) => {
  const { textColor, background, textSize, textWeight, text, handleClick, children } = props;
  return (
    <SocialMediaButton
      textColor={textColor}
      background={background}
      textSize={textSize}
      textWeight={textWeight}
      onClick={handleClick}
    >
      {`${text}  `}
      {children}
    </SocialMediaButton>
  );
};

export default SocialMediaLoginButton;
