import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import CartProvider, { useCartContext, useCartDispatch } from '../../context/Cart/cartContext';
import Product from '../../components/Store/Products/Product';

function MockComponent() {
  const cart = useCartContext();
  const actions = useCartDispatch();
  return (
    <div>
      <p>{cart!.total}</p>
      <button
        type="button"
        onClick={() =>
          actions!({
            type: 'ADD_TO_CART',
            payload: { id: 20, name: 'testItem', price: 100, quantity: 1, image: '' },
          })
        }
      >
        Add to cart test
      </button>
      <button
        type="button"
        onClick={() =>
          actions!({
            type: 'REMOVE_FROM_CART',
            payload: 20,
          })
        }
      >
        Remove from cart
      </button>
      <button
        type="button"
        onClick={() =>
          actions!({
            type: 'CLEAR_CART',
          })
        }
      >
        Clear cart
      </button>
      <Product
        product={{
          id: 20,
          title: 'testItem',
          price: 100,
          category: "",
          description: '',
          image: "",
        }}
      />
    </div>
  );
}

beforeEach(() => {
  render(<MockComponent />, { wrapper: CartProvider });
});

describe('CartProvider', () => {
  it('should use the state from the cartReducer', () => {
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('should dispatch actions to the cartReducer', async () => {
    const button = screen.getByText('Add to cart test');
    await userEvent.click(button);
    expect(screen.getByText('100')).toBeInTheDocument();
  });
});

describe('Cart Context', () => {
  it('should remove an item from the cart', async () => {
    const addButton = screen.getByText('Add to cart test');
    const removeButton = screen.getByText('Remove from cart');
    await userEvent.click(addButton);
    await userEvent.click(removeButton);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('should clear the cart', async () => {
    const addButton = screen.getByText('Add to cart test');
    const clearButton = screen.getByText('Clear cart');
    await userEvent.click(addButton);
    await userEvent.click(addButton);
    await userEvent.click(addButton);
    await userEvent.click(clearButton);
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});

describe('Products on cart', () => {
  it('should add a product from the product card', async () => {
    const addButton = screen.getByText('Add to cart');
    await userEvent.click(addButton);
    expect(screen.getByText('Added to cart')).toBeInTheDocument();
  });
});
