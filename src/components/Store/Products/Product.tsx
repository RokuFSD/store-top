import React from 'react';
import { IProduct } from '../../../types/api';
import { useCartContext, useCartDispatch } from '../../../context/Cart/cartContext';
import ProductButton from '../../Button/ProductButton';
import fallbackImg from '../../../assets/pngwing.com.png';

type ProductProps = {
  product: IProduct;
};

function Product({ product }: ProductProps) {
  const cart = useCartContext();
  const dispatch = useCartDispatch();

  function addToCart() {
    dispatch?.({
      type: 'ADD_TO_CART',
      payload: { name: product.title, quantity: 1, ...product }
    });
  }

  return (
    <div className='flex flex-col overflow-hidden gap-3 w-64 card md:w-60'>
      <img src={product.image ? product.image : fallbackImg} alt='product' className="object-contain bg-white"/>
      <h2 className='font-semibold px-1 h-20'>
        <span className="line-clamp-1">{product.title}</span>
        <span className='block line-clamp-2 font-normal text-xs w-44'>{product.description}</span>
      </h2>
      <div className='w-full flex justify-between items-center px-1 my-1'>
        <span className='text-md'>$ {product.price}</span>
        <ProductButton onClick={() => addToCart()} disabled={cart?.ids[product.id]} />
      </div>
    </div>
);
}

export default Product;
