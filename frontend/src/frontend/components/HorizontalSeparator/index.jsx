import React from 'react';
import styled from 'styled-components';

const Separator = styled.div`
  display: flex;
  margin: 10px 0px;
  text-align: center;
  align-items: center;
  
  &:before{
    flex: 1;
    content: '';
    margin-right: .25em;
    border-bottom: 1px solid ${props => props.barColor || '#333333'};
  }
  &:after{
    flex: 1;
    content: '';
    margin-left: .25em;
    border-bottom: 1px solid ${props => props.barColor || '#333333'};
  }
`;

const HorizontalSeparator = (props) => {
  const { text, barColor } = props;
  return (
    <Separator barColor={barColor}>
      {text}
    </Separator>
  );
};

export default HorizontalSeparator;
