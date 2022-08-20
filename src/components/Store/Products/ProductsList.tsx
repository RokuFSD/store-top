import React from 'react';
import { IProduct } from '../../../types/api';
import Product from "./Product"

function ProductsList({ products }: { products: IProduct[] }) {
  return (
    <section className="grid place-content-center">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  );
}

export default ProductsList;
