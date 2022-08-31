import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { IProduct } from '../../types/api';
import {ProductDetails, WithFetchProductDetails} from '../../components/Product/ProductDetails';

function ProductPage() {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state as IProduct;

  if (product) {
    return <ProductDetails product={product}/>
  }

  return <WithFetchProductDetails id={+id!}/>;
}

export default ProductPage;
