import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import '@testing-library/jest-dom/';

describe('Header layout', () => {

  it('renders on the page', () => {
    render(<Header isSmallScreen={false} />, {wrapper: BrowserRouter});
    expect(screen.getByText(/fakestore/i)).toBeInTheDocument();
  });

  it('renders the nav component', () => {
    render(<Header isSmallScreen={false} />, {wrapper: BrowserRouter});
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText('store')).toBeInTheDocument();
  })

  it('show the nav mobile component on small screens', () => {
    render(<Header isSmallScreen/>, {wrapper: BrowserRouter});
    expect(screen.getByTestId('hamburger-menu')).toBeInTheDocument();
  })

  it('hide the nav mobile component on large screens', () => {
    render(<Header isSmallScreen={false}/>, {wrapper: BrowserRouter});
    expect(screen.queryByTestId('hamburger-menu')).not.toBeInTheDocument();
  })
});
