import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import WithToggle from './index';

function MockComponent() {
  return <div>mocked</div>;
}

beforeEach(() => {
  render(<WithToggle comp={<MockComponent />} />, { wrapper: MemoryRouter });
});

describe('WithToggle', () => {
  it('should render', () => {
    expect(screen.getByText('mocked')).toBeInTheDocument();
  });

  it('should show the component on button click', async () => {
    const button = screen.getByLabelText('hamburger');
    const section = screen.getByTestId('toggable-section');
    await userEvent.click(button);
    expect(section.className).toContain('visible');
  });

  it('should add the animate-slide-from-bottom class on button click', async () => {
    const button = screen.getByLabelText('hamburger');
    const section = screen.getByTestId('toggable-section');
    await userEvent.click(button);
    await userEvent.click(button);
    expect(section.className).toContain('animate-slide-from-bottom');
  });
});
