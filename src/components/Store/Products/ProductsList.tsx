/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';
import { IProduct } from '../../../types/api';

type ProductsListProps = {
  products: IProduct[];
};

function ProductsList({ products }: ProductsListProps) {
  const { id } = useParams();
  const filteredProducts = id
    ? products.filter((product) => product.category.slug === id)
    : products;

  return (
    <div className="productsList">
      <section className="grid gap-4 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts?.map((product) => (
          // eslint-disable-next-line no-underscore-dangle
          <Product key={product._id} product={product} />
        ))}
      </section>
    </div>
  );
}

export default ProductsList;
