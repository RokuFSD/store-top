import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductsList from '../../components/Store/Products/ProductsList';
import Sidebar from '../../components/Sidebar/Sidebar';
import useFetch from '../../hooks/useFetch';
import { IProduct } from '../../types/api';

type StoreProps = {
  isSmallScreen: boolean;
};
const URL = 'https://fakestoreapi.com';

function Store({ isSmallScreen }: StoreProps) {
  const { data: products, error } = useFetch<IProduct[]>(`${URL}/products`);

  if(error){
    return <div>There is an error</div>;
  }

  if(!products){
    return <div>Loading...</div>;
  }
  return (
    <section className="flex flex-col items-center py-16 justify-center gap-20 md:flex-row md:items-start">
      {isSmallScreen ? null : <Sidebar />}
      <Routes>
        <Route path="/">
          <Route index element={<ProductsList products={products}/>} />
          <Route path="category" element={<ProductsList products={products}/>} />
          <Route path="category/:id" element={<ProductsList products={products}/>} />
        </Route>
      </Routes>
    </section>
  );
}

export default Store;
