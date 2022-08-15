import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './layouts/Header/Header';
import useMediaQuery from './hooks/useMediaQuery';

function App() {
  const { isSmallScreen } = useMediaQuery('(min-width: 768px)');
  return (
    <>
      <Header isSmallScreen={isSmallScreen} />
      <Routes>
        <Route path="/" element={<h1>You are in the Home</h1>} />
        <Route path="/store" element={<h1>You are in the Store</h1>} />
      </Routes>
    </>
  );
}

export default App;
