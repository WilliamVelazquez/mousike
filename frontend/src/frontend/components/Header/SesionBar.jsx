import React from 'react';
import styled from 'styled-components';
import ProfileMenu from './ProfileMenu';

const SessionBarWrapper = styled.nav`
  margin:0;
  width: 100%;
  height: 64px;
  background:#666;
  grid-gap: 10px;
  display:grid;
  grid-auto-flow:column;
  justify-content: space-evenly;
  align-content: space-evenly;
`;
const MenuElement = styled.li`
    list-style:none;
    & > a{
        color:white;
        text-decoration:none;
        &:hover{
            text-decoration:underline;
        }
    }
`;

const SessionBar = () => {
  return (
    <div>
      <SessionBarWrapper>
        <MenuElement><a href="/"><ProfileMenu /></a></MenuElement>
      </SessionBarWrapper>

    </div>
  );
};

export default SessionBar;

