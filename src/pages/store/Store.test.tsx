import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import Store from './Store';

global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve([
        { id: 1, title: 'Product 1', price: 1, images:[''] },
        { id: 2, title: 'Product 2', price: 2, images:[''] },
        { id: 3, title: 'Product 3', price: 3, images:[''] },
      ]),
  })
);

describe('Store', () => {
  it('should render the store', async () => {
    // @ts-expect-error no overload matches this call
    await act(async () => render(<Store  isSmallScreen/>, {wrapper: BrowserRouter}));
    expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
  });

  it('should render a error message when there is an error', async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    );
    // @ts-expect-error no overload matches this call
    await act(async () => render(<Store  isSmallScreen/>, {wrapper: BrowserRouter}));
    expect(screen.getByText(/There is an error/i)).toBeInTheDocument();
  });
});
