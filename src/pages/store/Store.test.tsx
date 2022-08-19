import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/';
import Store from './Store';

describe('Store', () => {
  it('should render the store', () => {
    render(<Store />);
    expect(screen.getByText(/store/i)).toBeInTheDocument()
  })
})
