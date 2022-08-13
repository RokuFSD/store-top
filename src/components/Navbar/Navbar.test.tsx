import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import '@testing-library/jest-dom/';

describe('Navbar', () => {
  it('renders on the page', () => {
    render(<Navbar />, {wrapper: BrowserRouter});
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  })
})
