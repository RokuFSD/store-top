import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <NavLink to="/">home</NavLink>
        <NavLink to="/store">store</NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
