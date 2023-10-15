import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import Search from './Search';

const renderWithProviders = (children: JSX.Element) => (
  render(
    <MemoryRouter>
      <Provider store={store}>
        {children}
      </Provider>
    </MemoryRouter>,
  )
);

describe('Search', () => {
  it('render snapshot', () => {
    const { container } = renderWithProviders(<Search />);
    expect(container).toMatchSnapshot();
  });

  it('check input value', () => {
    renderWithProviders(<Search />);
    const input = screen.getByPlaceholderText('What do you want to watch?');
    expect((input as HTMLInputElement).value).toBe('');
    fireEvent.change(input, { target: { value: 'Cool' } });

    screen.debug();
    expect((input as HTMLInputElement).value).toBe('Cool');
  });

  it('check click', () => {
    renderWithProviders(<Search />);
    const input = screen.getByPlaceholderText('What do you want to watch?');
    const button = screen.getByText('search');
    fireEvent.change(input, { target: { value: 'Cool' } });

    fireEvent.click(button);
    expect((input as HTMLInputElement).value).toBe('Cool');
  });
});
