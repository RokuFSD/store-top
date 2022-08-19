import React from 'react';
import useProducts from '../../hooks/useProducts';
import ProductsList from '../../components/Store/Products/ProductsList';

function Store() {
  const { products, loading, error } = useProducts();

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main>
      {loading && <div>Loading...</div>}
      <ProductsList products={products} />
    </main>
  );
}

export default Store;
