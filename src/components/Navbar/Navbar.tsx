import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul className="bg-white border-t-2 h-36 flex flex-col w-full gap-4 justify-center items-center md:flex-row lg:gap-12 md:h-auto md:border-none">
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
