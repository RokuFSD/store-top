import React from 'react';
import { render } from '@testing-library/react';
import useUpdateEffect from '../useUpdateEffect';

function TestComponent({ callback }: { callback: jest.Mock }) {
  useUpdateEffect(callback, [{}]);
  return <div />;
}

const effect = jest.fn();
const { rerender } = render(<TestComponent callback={effect} />);

describe('useUpdateEffect', () => {
  it('should call effect on second update', () => {
    render(<TestComponent callback={effect}/>);
    rerender(<TestComponent callback={effect}/>);
    expect(effect).toHaveBeenCalledTimes(1);
  });

  it('should not call effect on first update', () => {
    const newOne = jest.fn();
    render(<TestComponent callback={newOne}/>);
    expect(newOne).toHaveBeenCalledTimes(0);
  });
});
