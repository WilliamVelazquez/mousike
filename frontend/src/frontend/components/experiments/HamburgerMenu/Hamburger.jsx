/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react';
import styled from 'styled-components';
import Hamburger from '../Buttons/Hamburger';

let isHidden = true;

const FakeBody = styled.nav`
    background:blue;
    `;

const MenuToggle = styled.div`
    
    `;

const MenuContent = styled.nav`
        display:${props => props.theme.display};
    `;

MenuContent.defaultProps = {
  theme: {
    display: 'block',
  },
};
// MenuContent.defaultProps.isHidden = isHidden ? 'none' : 'block';

const MenuElement = styled.li`
       list-style:none;
    `;

class Menu extends Component {
  constructor() {
    super();
    isHidden = true;
  }

  handleHamburgerClick() {
    const hamburger = document.getElementById('hamburger');
    isHidden = !hamburger.checked;
    MenuContent.defaultProps.theme.display = isHidden ? 'none' : 'block';
  }

  render() {
    return (
      <FakeBody className="fakeBody">
        <Hamburger onClick={this.handleHamburgerClick.bind(this)} color="white" id="hamburger" fontSize="36px" />
        <MenuToggle id="menuToggle">

          {/* <i style={{ color: 'white' }} className="fa fa-bars" aria-hidden="true" /> */}

          <MenuContent id="menu">
            <a href="/"><MenuElement>Home</MenuElement></a>
            <a href="/"><MenuElement>About</MenuElement></a>
            <a href="/"><MenuElement>Info</MenuElement></a>
            <a href="/"><MenuElement>Contact</MenuElement></a>
            <a href="https://erikterwan.com/" target="_blank"><MenuElement>Show me more</MenuElement></a>
          </MenuContent>
        </MenuToggle>
      </FakeBody>
    );
  }
}

export default Menu;
