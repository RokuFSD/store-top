import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import CartProvider, { useCartDispatch } from '../../context/Cart/cartContext';
import ProductButton from '../Button/ProductButton';

function MockComponent() {
  const dispatch = useCartDispatch();

  return (
    <ProductButton
      onClick={() =>
        dispatch!({
          type: 'ADD_TO_CART',
          payload: { id: 20, name: 'testItem', price: 100, quantity: 1, image: '' },
        })
      }
      id={20}
    />
  );
}

describe('ProductButton', () => {
  it('should render add to cart button', () => {
    render(<ProductButton onClick={() => {}} id={1} />);
    expect(screen.getByText('Add to cart')).toBeInTheDocument();
  });

  it('should render a disabled button', async () => {
    render(<MockComponent />, { wrapper: CartProvider });
    await userEvent.click(screen.getByText('Add to cart'));
    expect(screen.getByText('Added to cart')).toBeInTheDocument();
  });
});
