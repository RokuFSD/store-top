import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import Home from './pages/home/Home';
import Store from './pages/store/Store';
import useMediaQuery from './hooks/useMediaQuery';
import Main from './layouts/Main/Main';
import CartProvider from './context/Cart/cartContext';

function App() {
  const { isSmallScreen } = useMediaQuery('(max-width: 767px)');
  return (
    <CartProvider>
      <Header isSmallScreen={isSmallScreen} />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store/*" element={<Store isSmallScreen={isSmallScreen} />} />
        </Routes>
      </Main>
      <Footer />
    </CartProvider>
  );
}

export default App;
