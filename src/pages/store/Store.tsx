import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { IProduct } from '../../types/api';
import ProductsList from '../../components/Store/Products/ProductsList';
import Dropdown from '../../components/Categories/Dropdown/Dropdown';
import Sidebar from '../../components/Categories/Sidebar/Sidebar';
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
    <section className="flex flex-col items-center py-16 gap-8 justify-center md:flex-row md:items-start md:gap-20">
      {isSmallScreen ? (
        <Dropdown label="Categories" options={categories} />
      ) : (
        <Sidebar title="Categories" options={categories} />
      )}
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

