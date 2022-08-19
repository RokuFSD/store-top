import React from 'react';
import { IProduct } from '../../../types/api';
import Product from "./Product"

function ProductsList({ products }: { products: IProduct[] }) {
  return (
    <section>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  );
}

export default ProductsList;
