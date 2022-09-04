import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { IProduct } from '../../types/api';
import ProductsList from '../../components/Store/Products/ProductsList';
import Dropdown from '../../components/Dropdown/Dropdown';
import Sidebar from '../../components/Sidebar/Sidebar';
import useFetch from '../../hooks/useFetch';
import Loader from '../../components/Loader/Loader';

type StoreProps = {
  isSmallScreen: boolean;
};
const URL = 'https://fakestoreapi.com';

function Store({ isSmallScreen }: StoreProps) {
  const { data: products, error: productsError } = useFetch<IProduct[]>(`${URL}/products`);
  const { data: categories, error: categoriesError } = useFetch<string[]>(
    `${URL}/products/categories`
  );

  if (productsError || categoriesError) {
    return <div>There is an error</div>;
  }

  if (!products || !categories) {
    return <Loader />;
  }
  return (
    <section className="flex flex-col items-center py-16 justify-center gap-20 md:flex-row md:items-start">
      {isSmallScreen ? <Dropdown label="categories" options={categories} /> : <Sidebar />}
      <Routes>
        <Route path="/">
          <Route index element={<ProductsList products={products} />} />
          <Route path="category" element={<ProductsList products={products} />} />
          <Route path="category/:id" element={<ProductsList products={products} />} />
        </Route>
      </Routes>
    </section>
  );
}

export default Store;
