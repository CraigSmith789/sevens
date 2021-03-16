import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {LinkContainer} from 'react-router-bootstrap'

const NavBar = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <LinkContainer to='/'>
        <Navbar.Brand>Sevens</Navbar.Brand>
      </LinkContainer>
      <Nav>
        <LinkContainer to='/rules'>
          <Nav.Link>Rules</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/stats'>
          <Nav.Link> Stats</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

export default NavBar;