import React from 'react';
import { IProduct } from '../../types/api';
import useFetch from '../../hooks/useFetch';
import Loader from '../Loader/Loader';
import ProductButton from '../Button/ProductButton';
import { useCartDispatch } from '../../context/Cart/cartContext';

const URL = 'https://fakestoreapi.com/products/';

type ProductDetailsProps = {
  product: IProduct;
};

type WithFetchProductDetailsProps = {
  id: IProduct['id'];
};

function ProductDetails({ product }: ProductDetailsProps) {
  const dispatch = useCartDispatch();

  function addToCart() {
    dispatch?.({
      type: 'ADD_TO_CART',
      payload: { name: product.title, quantity: 1, ...product },
    });
  }

  return (
    <div className="grid-cols-12 grid-rows-2">
      {/* Card Details */}
      <div className="flex">
        <img src={product.image} alt="product" />
        <div className="flex flex-col">
          <h1 className="text-3xl">{product.title}</h1>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
        <ProductButton onClick={() => addToCart()} id={product.id} />
      </div>
    </div>
  );
}

function WithFetchProductDetails({ id }: WithFetchProductDetailsProps) {
  const { data: fetchedProduct, error } = useFetch<IProduct>(`${URL}${id}`);

  /* TODO: Redirect to a 404 page */
  if (error) {
    return <div>There is an error</div>;
  }

  if (!fetchedProduct) {
    return <Loader />;
  }

  return <ProductDetails product={fetchedProduct} />;
}

export { ProductDetails, WithFetchProductDetails };
