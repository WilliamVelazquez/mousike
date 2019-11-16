import React from 'react';

import styled from 'styled-components';

const Hamburger = (props) => {
  const color = props.color || 'white';
  const fontSize = props.fontSize || '2em';
  const HamburgerButton = styled.input`
    cursor: pointer;
        -webkit-appearance: none;
    &:focus {
        outline: none;
    }
    &::after{
      content:'\f00d';
      font-family: FontAwesome;
      font-size:${fontSize};
      color:${color}
    }
      &:checked::after{
      content:'\f0c9';
    }
  `;
  return (
    <HamburgerButton type="checkbox" name={props.name} id={props.id} onClick={props.onClick} />
  );
};

export default Hamburger;
