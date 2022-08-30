import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import Home from './pages/home/Home';
import Store from './pages/store/Store';
import Cart from './pages/cart/Cart';
import Main from './layouts/Main/Main';
import useMediaQuery from './hooks/useMediaQuery';

function App() {
  const { isSmallScreen } = useMediaQuery('(max-width: 767px)');
  return (
    <>
      <Header isSmallScreen={isSmallScreen} />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store/*" element={<Store isSmallScreen={isSmallScreen} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<div>404</div>}/>
        </Routes>
      </Main>
      <Footer />
    </>
  );
}

export default App;
