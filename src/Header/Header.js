import React from 'react';
import {Link } from 'react-router-dom';
import { Navbar,Nav } from 'react-bootstrap';
import './Header.css';

function Header() { 
  return (
    <div className="Header">
      <Navbar bg="light" expand="lg" className="pl-4 pr-4">
        <Navbar.Brand  as={Link} to="/home">TWAIN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/album" >Album</Nav.Link>
            {/* <Nav.Link as={Link} to="/chat" >Chat</Nav.Link> */}
            <Nav.Link as={Link} to="/plan">Plan</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;