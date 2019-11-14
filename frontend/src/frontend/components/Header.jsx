import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = props => <HeaderWrapper className="Header" />;

export default Header;
