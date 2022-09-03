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
    <div className="grid grid-cols-12">
      {/* Card Details */}
      <div className="flex flex-col col-span-full">
        <div className="bg-white flex justify-center p-2">
          <img src={product.image} alt="product" className="w-40" />
        </div>
        <div className="flex flex-col p-2 gap-12 max-w-lg place-self-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-xl font-semibold">{product.title}</h1>
            <p className="text-sm">{product.description}</p>
          </div>
          <div className="place-self-center flex items-center justify-between w-full">
            <p className="font-semibold">${product.price}</p>
            <ProductButton onClick={() => addToCart()} id={product.id} />
          </div>
        </div>
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
