import React from 'react';
import { IProduct } from '../../../types/api';
import { useCartContext, useCartDispatch } from '../../../context/Cart/cartContext';
import ProductButton from '../../Button/ProductButton';

type ProductProps = {
  product: IProduct;
};

function Product({ product }: ProductProps) {
  const cart = useCartContext();
  const dispatch = useCartDispatch();

  function addToCart() {
    dispatch?.({
      type: 'ADD_TO_CART',
      // eslint-disable-next-line no-underscore-dangle
      payload: { id: +product._id, name: product.title, quantity: 1, ...product },
    });
  }

  return (
    <div className="flex flex-col overflow-hidden gap-3 w-64 card md:w-60">
      <img src={product.image} alt="product" />
      <h2 className="font-semibold px-1 h-20">
        {product.title}
        <span className="block line-clamp-2 font-normal text-xs w-44">{product.description}</span>
      </h2>
      <div className="w-full flex justify-between items-center px-1 my-1">
        <span className="text-md">$ {product.price}</span>
        {/* eslint-disable-next-line no-underscore-dangle */}
        <ProductButton onClick={() => addToCart()} disabled={cart?.ids[+product._id]} />
      </div>
    </div>
  );
}

export default React.memo(Product);
