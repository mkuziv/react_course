/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useContext } from 'react';
import Select from 'react-select';
import { useFormik } from 'formik';
import makeAnimated from 'react-select/animated';
import { AppContext } from '../../Context';
import Button from '../Button/Button';
import ModalValue from '../../types/enums';
import { useAppDispatch } from '../../store';
import { addMovie, updateMovie } from '../../slice/postsSlice';

import './MovieModal.scss';

interface MyFormValues {
  id?: number;
  title: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  vote_average: number;
  overview: string;
  genres: any;
}

export interface GenreOption {
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
  const isEditedPost = modal === ModalValue.EDIT;
  let movieDate: Date;

  if (isEditedPost) {
    movieDate = new Date(editedMovie.release_date);
  }

  const today = new Date();
  const dateDefaultValue = isEditedPost ? movieDate.toISOString().split('T')[0] : today.toISOString().split('T')[0];

  const initialValues: MyFormValues = !isEditedPost ? {
    title: '',
    poster_path: '',
    release_date: dateDefaultValue,
    runtime: 0,
    vote_average: 0,
    overview: '',
    genres: [],
  } : {
    id: editedMovie.id,
    title: editedMovie.title,
    poster_path: editedMovie.poster_path,
    release_date: dateDefaultValue,
    runtime: editedMovie.runtime,
    vote_average: editedMovie.vote_average,
    overview: editedMovie.overview,
    genres: editedMovie.genres,
  };

  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    handleChange,
    setFieldValue,
    resetForm,
    values,
  } = useFormik({
    initialValues,
    onSubmit: (data) => {
      if (isEditedPost) {
        dispatch(updateMovie(data));
        toggleModalType(null);
      }

      dispatch(addMovie(data));
      toggleModalType(null);
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
              <input type="text" id="title" value={values.title} onChange={handleChange} />
            </label>
            <label htmlFor="poster_path">
              movie url
              <input
                type="text"
                id="poster_path"
                placeholder="https://"
                value={values.poster_path}
                onChange={handleChange}
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
                  onChange={(value: any) => setFieldValue('genres', (value).map((item: any) => item.value))}
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
