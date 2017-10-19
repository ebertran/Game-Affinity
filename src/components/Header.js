import React from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => (
<Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <LinkContainer to="/">
          <a href="/">Game Affinity</a>
        </LinkContainer>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to="/" exact={true}>
          <NavItem eventKey={1} >Home</NavItem>
        </LinkContainer>
        <LinkContainer to="/test">
          <NavItem eventKey={2} >Test</NavItem>
        </LinkContainer>
        <LinkContainer to="/about">
          <NavItem eventKey={3} >About</NavItem>
        </LinkContainer>
        <LinkContainer to="/contact">
          <NavItem eventKey={4} >Contact</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header