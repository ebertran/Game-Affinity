import React from 'react';

import { Navbar, Nav, NavItem, Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => (
<Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <LinkContainer to="/">
          <a href="#">Game Affinity</a>
        </LinkContainer>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to="/" exact={true}>
          <NavItem eventKey={1} href="#">Home</NavItem>
        </LinkContainer>
        <LinkContainer to="/test">
          <NavItem eventKey={2} href="#">Test</NavItem>
        </LinkContainer>
        <LinkContainer to="/about">
          <NavItem eventKey={3} href="#">About</NavItem>
        </LinkContainer>
        <LinkContainer to="/contact">
          <NavItem eventKey={4} href="#">Contact</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header