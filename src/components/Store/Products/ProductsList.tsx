import React from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';
import { IProduct } from '../../../types/api';

type ProductsListProps = {
  products: IProduct[];
};

function ProductsList({ products }: ProductsListProps) {
  const { id } = useParams();
  const filteredProducts = id ? products.filter((product) => product.category === id) : products;

  return (
    <div className="productsList">
      <section className="grid gap-4 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}

export default ProductsList;
