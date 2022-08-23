import React from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';
import useProducts from '../../../hooks/useProducts';

function ProductsList() {
  const { id } = useParams();
  const { products, loading, error } = useProducts(id ? `/categories/${id}/products` : '/products');

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      {loading && <div>Loading...</div>}
      <section className="grid max-w-fit gap-4 place-items-center md:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </section>
    </>
  );
}

export default ProductsList;
