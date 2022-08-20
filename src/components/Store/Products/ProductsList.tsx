import React from 'react';
import { IProduct } from '../../../types/api';
import Product from "./Product"

function ProductsList({ products }: { products: IProduct[] }) {
  return (
    <section className="grid max-w-7xl mx-auto place-content-center py-5 place-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  );
}

export default ProductsList;
