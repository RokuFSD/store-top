import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul className="flex gap-12">
        <Link to="/" className="navlink">
          home
        </Link>
        <Link to="/store" className="navlink">
          store
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
