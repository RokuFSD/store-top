import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/';
import userEvent from '@testing-library/user-event';
import WithToggle from './index';

function MockComponent() {
  return <div>mocked</div>;
}

describe('WithToggle', () => {
  it('should render', () => {
    render(<WithToggle comp={<MockComponent />} />);
    expect(screen.getByText('mocked')).toBeInTheDocument();
  });

  it('should show the component on button click', async () => {
    render(<WithToggle comp={<MockComponent />} />);
    const button = screen.getByLabelText('hamburger');
    const section = screen.getByTestId('toggable-section');
    await userEvent.click(button);
    expect(section.className).toContain('block');
  });

  it('should add the animate-slide-from-bottom class on button click', async () => {
    render(<WithToggle comp={<MockComponent />} />);
    const button = screen.getByLabelText('hamburger');
    const section = screen.getByTestId('toggable-section');
    await userEvent.click(button);
    await userEvent.click(button);
    expect(section.className).toContain('animate-slide-from-bottom');
  })
});
