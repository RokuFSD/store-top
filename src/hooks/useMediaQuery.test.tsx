import React from 'react';
import { render } from '@testing-library/react';
import useMediaQuery from './useMediaQuery';

/* It should use renderHook from @testing-library/react to test the hook */

const matches = {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: query === 'mobile',
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
};

function getMediaQuery(query: string): { isSmallScreen: boolean } {
  let isSmallScreen: { isSmallScreen: boolean } = { isSmallScreen: false };

  function TestComponent() {
    isSmallScreen = useMediaQuery(query);
    return <div />;
  }

  render(<TestComponent />);
  return isSmallScreen;
}

beforeEach(() => {
  Object.defineProperty(window, 'matchMedia', matches);
})

describe('useMediaQuery', () => {
  it('should return true if media query matches', () => {
    const screen = getMediaQuery('mobile');
    expect(screen.isSmallScreen).toBe(true);
  });
  it('should return false if media query matches', () => {
    const screen = getMediaQuery('desktop');
    expect(screen.isSmallScreen).toBe(false);
  });
});
