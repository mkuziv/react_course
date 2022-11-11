/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useContext } from 'react';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';
import { AppContext } from '../../Context';
import Button from '../Button/Button';

import './AddMovie.scss';

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

const AddMovie = () => {
  const { modal, editedPost } = useContext(AppContext);
  const animatedComponents = makeAnimated();
  const isEditedPost = modal === 'edit';

  let movieDate: Date;

  if (isEditedPost) {
    movieDate = new Date(Number(editedPost.year), 0, 2);
  }
  const today = new Date();
  const defaultValue = isEditedPost ? movieDate.toISOString().split('T')[0] : today.toISOString().split('T')[0];

  return (
    <section className="add-movie">
      <h3 className="h3">{isEditedPost ? 'edit movie' : 'add movie'}</h3>
      <form action="" className="form">
        <div className="main">
          <div className="left-side">
            <label htmlFor="title">
              title
              <br />
              <input type="text" id="title" value={isEditedPost ? `${editedPost.name}` : ''} />
            </label>
            <label htmlFor="url">
              movie url
              <br />
              <input
                type="text"
                id="url"
                placeholder="https://"
                value={isEditedPost ? `${editedPost.imgName}` : ''}
              />
            </label>
            <label htmlFor="genre">
              genre
              <br />
              <div id="genre">
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  defaultValue={isEditedPost ? [genreOptions[1], genreOptions[2]] : []}
                  isMulti
                  options={genreOptions}
                  styles={customStyles}
                />
              </div>
            </label>
          </div>
          <div className="right-side">
            <label htmlFor="date">
              release date
              <br />
              <input
                type="date"
                id="date"
                defaultValue={defaultValue}
              />
            </label>
            <label htmlFor="rating">
              rating
              <br />
              <input type="number" id="rating" value={isEditedPost ? `${editedPost.rating}` : ''} />
            </label>
            <label htmlFor="runtime">
              runtime
              <br />
              <input
                type="number"
                id="runtime"
                placeholder="minutes"
                value={isEditedPost ? `${editedPost.runtime}` : ''}
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
          >
            Movie description
          </textarea>
        </label>
      </form>
      <div className="add-movie__button">
        <Button content="reset" btn="btn bnt-transparent btn-middle" type="button" />
        <Button content="submit" btn="btn btn-red btn-middle" type="submit" />
      </div>
    </section>
  );
};

export default AddMovie;