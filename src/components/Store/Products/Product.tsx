import React from 'react';
import { IProduct } from '../../../types/api';

type ProductProps = {
  product: IProduct;
}

function Product({ product }: ProductProps) {
  return (
    <div>
      <h2>{product.title}</h2>
    </div>
  );
}

export default Product;

