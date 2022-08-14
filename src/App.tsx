import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './layouts/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<h1>You are in the Home</h1>} />
        <Route path="/store" element={<h1>You are in the Store</h1>} />
      </Routes>
    </>
  );
}

export default App;
