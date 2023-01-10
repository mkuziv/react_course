import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import NotFound from './NotFound';

describe('NotFound', () => {
  it('render', () => {
    const { container } = render(<NotFound />);
    expect(container).toMatchSnapshot();
  });
});
