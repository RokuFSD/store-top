import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductButton from '../Button/ProductButton';

const disabled = true;

describe('ProductButton', () => {
  it('should render add to cart button', () => {
    render(<ProductButton onClick={() => {}} disabled={false} />);
    expect(screen.getByText('Add to cart')).toBeInTheDocument();
  });

  it('should render a disabled button', () => {
    render(<ProductButton onClick={() => {}}  disabled={disabled}/>);
    expect(screen.getByText('Added to cart')).toBeInTheDocument();
  })
});
