import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import '@testing-library/jest-dom/';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

beforeEach(() => {
  render(<App />, { wrapper: BrowserRouter });
});

describe('App Component', () => {
  it('should render the app', () => {
    expect(screen.getByText(/you are in the home/i)).toBeInTheDocument();
  });
  it('should render the navbar', () => {
    const link = screen.getByText('store');
    expect(link).toHaveAttribute('href', '/store');
  });
  it('should change the page when clicking on the navbar', async () => {
    const link = screen.getByText('store');
    await userEvent.click(link);
    expect(screen.getByText(/you are in the store/i)).toBeInTheDocument();
  });
});
