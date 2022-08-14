import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../../App';
import '@testing-library/jest-dom/';

describe('App Component', () => {
  it('should render the app', () => {
    render(<App />, {wrapper: BrowserRouter});
    expect(screen.getByText('Home')).toBeInTheDocument();
  })
  it('should render the navbar', () => {
    render(<App />, {wrapper: BrowserRouter});
    const link = screen.getByText('store');
    expect(link).toHaveAttribute('href', '/store');
  })

})
