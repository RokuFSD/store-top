import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import '@testing-library/jest-dom/';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        { id: 1, title: 'Product 1', price: 1, images: [''] },
        { id: 2, title: 'Product 2', price: 2, images: [''] },
        { id: 3, title: 'Product 3', price: 3, images: [''] },
      ]),
  })
);

beforeEach(() => {
  render(<App />, { wrapper: MemoryRouter });
});

describe('App Component', () => {
  it('should render the app', () => {
    expect(screen.getByText(/Wear the best/i)).toBeInTheDocument();
  });
  it('should render the navbar', () => {
    const link = screen.getByText('store');
    expect(link).toHaveAttribute('href', '/store');
  });
  it('should change the page when clicking on the navbar', async () => {
    const link = screen.getByText('store');
    await userEvent.click(link);
    expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
  });
  it('should go to the store page when clicking on the button', async () => {
    const button = screen.getByText(/shop now/i);
    await userEvent.click(button);
    expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
  });

});
