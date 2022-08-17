import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/';
import { BrowserRouter } from 'react-router-dom';
import Home from "./Home";

describe('Homepage', () => {
  it('should render the homepage', () => {
    render(<Home />, {wrapper: BrowserRouter});
    expect(screen.getByText(/wear the best/i)).toBeInTheDocument();
  })
})
