import { useState, useEffect } from 'react';
import { IProduct } from '../types/api';

const URL = 'https://api.escuelajs.co/api/v1';

function useProducts(endpoint: string): {
  products: IProduct[];
  loading: boolean;
  error: string;
} {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    let ignore = false;

    function fetchProducts() {
      fetch(`${URL}${endpoint}`)
        .then((res) => res.json())
        .then((data: IProduct[]) => {
          if (!ignore) {
            if (!data.length) {
              throw new Error('There are no products');
            }
            setProducts(data);
          }
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }

    fetchProducts();
    return () => {
      ignore = true;
    };
  }, [endpoint]);
  return { products, loading, error };
}

export default useProducts;
