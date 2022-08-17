import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import Home from './pages/home/Home';
import useMediaQuery from './hooks/useMediaQuery';

function App() {
  const { isSmallScreen } = useMediaQuery('(max-width: 768px)');
  return (
    <>
      <Header isSmallScreen={isSmallScreen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<h1>You are in the Store</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
