import React from 'react';
import {Link } from 'react-router-dom';
import { Navbar,Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import './Header.css';

function Header() { 
  return (
    <div className="NavBar">
      <header>
        <h2 className="Brand">Twain</h2>
        <NavLink
          className="nav-link"
          activeClassName="nav-link-active"
          exact to="/">Home</NavLink>
        <NavLink
          className="nav-link"
          activeClassName="nav-link-active"
          exact to="/album">Album</NavLink>

        <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            to="/plan">Plan</NavLink>   
      </header>        
    </div>
  );
}

export default Header;