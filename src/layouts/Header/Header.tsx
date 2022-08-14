import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

function Header() {
  return (
    <header className="flex w-full h-24 items-center justify-between px-24 bg-white font-display">
      <h2 className="text-2xl pointer-events-none">FakeStore</h2>
      <Navbar/>
    </header>
  );
}

export default Header;
