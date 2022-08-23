import React from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';
import { IProduct } from '../../../types/api';
import useFetch from '../../../hooks/useFetch';

const URL = 'https://api.escuelajs.co/api/v1';

function ProductsList() {
  const { id } = useParams();
  const { data:products, error} = useFetch<IProduct[]>(id ? `${URL}/categories/${id}/products` : `${URL}/products`);

  if (error) {
    return <div>There is an error</div>;
  }
  return (
    <div className="productsList">
      {!products ? (
        <div>Loading...</div>
      ) : (
        <section className="grid gap-4 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </section>
      )}
    </div>
  );
}

export default ProductsList;

