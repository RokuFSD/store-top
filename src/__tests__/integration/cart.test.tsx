import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import CartProvider, { useCartContext, useCartDispatch } from '../../context/Cart/cartContext';
import Product from '../../components/Store/Products/Product';
import CartItem from '../../components/Cart/CartItem';

function MockComponent() {
  const cart = useCartContext();
  const actions = useCartDispatch();
  return (
    <MemoryRouter>
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
            category: '',
            description: '',
            image: '',
          }}
        />
        <CartItem
          item={{
            id: 20,
            name: 'testItem',
            price: 100,
            quantity: 1,
            image: '',
          }}
        />
      </div>
    </MemoryRouter>
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

describe('Cart Item Controller', () => {
  it('should increase the quantity of an item', async () => {
    const addToCart = screen.getByText('Add to cart test');
    const increaseButton = screen.getByText('+');
    await userEvent.click(addToCart);
    await userEvent.click(increaseButton);
    await userEvent.click(increaseButton);
    expect(screen.getByText('300')).toBeInTheDocument();
  });

  it('should decrease the quantity of an item', async () => {
    const addToCart = screen.getByText('Add to cart test');
    const decreaseButton = screen.getByText('-');
    await userEvent.click(addToCart);
    await userEvent.click(addToCart);
    await userEvent.click(decreaseButton);
    expect(screen.getByText('100')).toBeInTheDocument();
  })

  it('should change the quantity with the input', async () => {
    const addToCart = screen.getByText('Add to cart test');
    const input = screen.getByRole('textbox');
    await userEvent.click(addToCart);
    await userEvent.type(input, '5');
    expect(screen.getByText('1500')).toBeInTheDocument();
  })
});
