import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppContext, IAppContext } from '../../Context';
import Header from './Header';

const toggleModalType = jest.fn();
const setSelectedMovie = jest.fn();

const mockDataSearch: IAppContext = {
  modal: null,
  editedMovie: null,
  selectedMovie: {
    id: 1,
    title: 'title',
    poster_path: 'path',
    release_date: '2018-12-12',
    runtime: 120,
    vote_average: 7,
    overview: 'overview',
    genres: ['comedy'],
  },
  deletedMovieID: null,
  setSelectedMovie,
};

const mockDataAddMovie: IAppContext = {
  modal: null,
  editedMovie: null,
  selectedMovie: null,
  deletedMovieID: null,
  toggleModalType,
};

const renderAppContext = (children: JSX.Element, mockData: IAppContext) => render(
  <MemoryRouter>
    <AppContext.Provider value={mockData}>
      {children}
    </AppContext.Provider>
  </MemoryRouter>,
);

describe('Header', () => {
  it('check search button', () => {
    renderAppContext(<Header />, mockDataSearch);
    const searchButton = screen.getByText('.');
    const addButton = screen.queryByText('+ add movie');
    expect(searchButton).toBeInTheDocument();
    expect(addButton).not.toBeInTheDocument();
  });

  it('click search', () => {
    renderAppContext(<Header />, mockDataSearch);
    const searchButton = screen.getByText('.');
    fireEvent.click(searchButton);
    expect(setSelectedMovie).toHaveBeenCalled();
  });

  it('check add movie button', () => {
    renderAppContext(<Header />, mockDataAddMovie);
    const addButton = screen.getByText('+ add movie');
    const searchButton = screen.queryByText('.');
    expect(addButton).toBeInTheDocument();
    expect(searchButton).not.toBeInTheDocument();
  });

  it('click search', () => {
    renderAppContext(<Header />, mockDataAddMovie);
    const addButton = screen.getByText('+ add movie');
    fireEvent.click(addButton);
    expect(toggleModalType).toHaveBeenCalled();
  });
});
