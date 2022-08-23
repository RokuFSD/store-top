import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductsList from '../../components/Store/Products/ProductsList';
import Sidebar from '../../components/Sidebar/Sidebar';

function Store() {
  return (
    <section className="flex flex-col items-center py-16 justify-center gap-20 lg:flex-row lg:items-start">
      <Sidebar />
      <Routes>
        <Route path="/">
          <Route index element={<ProductsList />} />
          <Route path="category" element={<ProductsList />} />
          <Route path="category/:id" element={<ProductsList />} />
        </Route>
      </Routes>
    </section>
  );
}

export default Store;
