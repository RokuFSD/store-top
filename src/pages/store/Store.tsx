import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductsList from '../../components/Store/Products/ProductsList';

function Store() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<ProductsList />} />
        <Route path="category" element={<ProductsList />} />
        <Route path="category/:id" element={<ProductsList />} />
      </Route>
    </Routes>
  );
}

export default Store;
