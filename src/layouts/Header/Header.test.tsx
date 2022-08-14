import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import '@testing-library/jest-dom/';

describe('Header layout', () => {
  it('renders on the page', () => {
    render(<Header />, {wrapper: BrowserRouter});
    expect(screen.getByText(/fakestore/i)).toBeInTheDocument();
  });

  it('renders the nav component', () => {
    render(<Header />, {wrapper: BrowserRouter});
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText('store')).toBeInTheDocument();
  })
});
