import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { AppProvider } from '../../Context';

const renderAppContext = (children: any) => render(
  <AppProvider>
    {children}
  </AppProvider>,
);

describe('Footer', () => {
  it('render', () => {
    renderAppContext(<Footer />);
    const logo = screen.getByText('netflix');
    expect(logo).toBeInTheDocument();
  });
});
