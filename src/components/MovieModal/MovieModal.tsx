/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import Select from 'react-select';
import { useFormik } from 'formik';
import makeAnimated from 'react-select/animated';
import { AppContext } from '../../Context';
import Button from '../Button/Button';
import ModalValue from '../../types/enums';
import { useAppDispatch } from '../../store';
import { addMovie, updateMovie } from '../../slice/postsSlice';
import { FormValues } from '../../types/interfaces';

import './MovieModal.scss';

interface GenreOption {
  readonly value: string;
  readonly label: string;
}

const customStyles = {
  control: () => ({
    // none of react-select's styles are passed to <Control />
    backgroundColor: '#323232',
    marginTop: '12px',
    width: '100%',
    color: '#ffffff',
    marginBottom: '30px',
    border: 'none',
    height: '57px',
    display: 'flex',
  }),

  option: (styles: any) => ({
    ...styles,
    backgroundColor: '#323232',
    cursor: 'pointer',
    ':active': {
      ...styles[':active'],
      backgroundColor: '#5a5a5a',
    },
    ':hover': {
      ...styles[':hover'],
      backgroundColor: '#5a5a5a',
    },
  }),

  multiValue: (styles: any) => ({
    ...styles,
    backgroundColor: '#5a5a5a',
  }),

  multiValueLabel: (styles: any) => ({
    ...styles,
    color: '#ffffff',
  }),

  multiValueRemove: (styles: any) => ({
    ...styles,
    color: '#323232',
    cursor: 'pointer',
  }),
};

export const genreOptions: readonly GenreOption[] = [
  { value: 'Documentary', label: 'Documentary' },
  { value: 'Comedy', label: 'Comedy' },
  { value: 'Horror', label: 'Horror' },
  { value: 'Crime', label: 'Crime' },
];

const MovieModal = () => {
  const { modal, editedMovie, toggleModalType } = useContext(AppContext);
  const animatedComponents = makeAnimated();
  const [query] = useSearchParams();
  const isEditedPost = modal === ModalValue.EDIT;
  const movieDate: Date = isEditedPost ? new Date(editedMovie.release_date) : new Date();
  const queryString = `searchBy=title&sortOrder=desc&sortBy=${query.get('sortBy') || 'release_date'}&search=${query.get('search') || ''}&filter=${query.get('genre') || ''}`;

  const dateDefaultValue = isEditedPost
    ? movieDate.toISOString().split('T')[0]
    : movieDate.toISOString().split('T')[0];

  const initialValues: FormValues = {
    id: isEditedPost ? editedMovie.id : null,
    title: isEditedPost ? editedMovie.title : '',
    poster_path: isEditedPost ? editedMovie.poster_path : '',
    release_date: dateDefaultValue,
    runtime: isEditedPost ? editedMovie.runtime : 0,
    vote_average: isEditedPost ? editedMovie.vote_average : 0,
    overview: isEditedPost ? editedMovie.overview : '',
    genres: isEditedPost ? editedMovie.genres : [],
  };

  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    handleChange,
    setFieldValue,
    resetForm,
    values,
    errors,
  } = useFormik({
    initialValues,
    onSubmit: (data) => {
      if (isEditedPost) {
        dispatch(updateMovie(data, queryString));
        toggleModalType(null);
        return;
      }

      delete data.id;
      dispatch(addMovie(data, queryString));
      toggleModalType(null);
    },

    validate: (val) => {
      const error: any = {};
      if (!val.title) {
        error.title = 'Required';
      }

      if (!val.poster_path) {
        error.poster_path = 'Required';
      }

      if (!val.overview) {
        error.overview = 'Required';
      }

      if (!val.runtime) {
        error.runtime = 'Required';
      }

      return error;
    },
  });

  return (
    <section className="movie-modal">
      <h3 className="h3">{isEditedPost ? 'edit movie' : 'add movie'}</h3>
      <form action="" className="form" onSubmit={handleSubmit}>
        <div className="main">
          <div className="left-side">
            <label htmlFor="title">
              title
              <input
                type="text"
                id="title"
                value={values.title}
                onChange={handleChange}
                className={errors.title ? 'isError ' : ''}
              />
            </label>
            <label htmlFor="poster_path">
              movie url
              <input
                type="text"
                id="poster_path"
                placeholder="https://"
                value={values.poster_path}
                onChange={handleChange}
                className={errors.poster_path ? 'isError' : ''}
              />
            </label>
            <label htmlFor="genre">
              genre
              <div id="genre">
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  value={
                    genreOptions.filter((option) => values.genres.indexOf(option.value) >= 0)
                  }
                  onChange={(value: GenreOption[]) => setFieldValue('genres', (value).map((item: GenreOption) => item.value))}
                  isMulti
                  options={genreOptions}
                  styles={customStyles}
                />
              </div>
            </label>
          </div>
          <div className="right-side">
            <label htmlFor="release_date">
              release date
              <input
                type="date"
                id="release_date"
                value={values.release_date}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="vote_average">
              vote average
              <input type="number" id="vote_average" value={values.vote_average} onChange={handleChange} />
            </label>
            <label htmlFor="runtime">
              runtime
              <input
                type="number"
                id="runtime"
                placeholder="minutes"
                value={values.runtime}
                onChange={handleChange}
                className={errors.runtime ? 'isError' : ''}
              />
            </label>
          </div>
        </div>
        <label htmlFor="overview">
          overview
          <textarea
            id="overview"
            rows={5}
            cols={30}
            onChange={handleChange}
            value={values.overview}
            className={errors.overview ? 'isError' : ''}
          />
        </label>
        <div className="movie-modal__button">
          <Button content="reset" btn="btn bnt-outlined btn-middle" type="button" onClick={() => resetForm()} />
          <Button content="submit" btn="btn btn-red btn-middle" type="submit" />
        </div>
      </form>
    </section>
  );
};

export default MovieModal;
