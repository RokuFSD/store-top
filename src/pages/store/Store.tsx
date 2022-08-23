import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductsList from '../../components/Store/Products/ProductsList';
import Sidebar from '../../components/Sidebar/Sidebar';

type StoreProps = {
  isSmallScreen: boolean;
}

function Store({ isSmallScreen }: StoreProps) {
  return (
    <section className="flex flex-col items-center py-16 justify-center gap-20 md:flex-row md:items-start">
      {isSmallScreen ? null : <Sidebar/>}
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
