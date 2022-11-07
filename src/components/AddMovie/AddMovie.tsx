import React, { useContext } from 'react';
import { AppContext } from '../../Context';
import Button from '../Button/Button';

import './AddMovie.scss';

const AddMovie = () => {
  const { modal } = useContext(AppContext);
  return (
    <section className="add-movie">
      <h3 className="h3">{modal === 'edit' ? 'edit movie' : 'add movie'}</h3>
      <form action="" className="form">
        <div className="main">
          <div className="left-side">
            <label htmlFor="title">
              title
              <br />
              <input type="text" id="title" />
            </label>
            <label htmlFor="url">
              movie url
              <br />
              <input type="text" id="url" placeholder="https://" />
            </label>
            <label htmlFor="genre">
              genre
              <br />
              <select name="" id="genre">
                <option value="select genre">Select Genre</option>
                <option value="documentary">Documentary</option>
                <option value="comedy">Comedy</option>
                <option value="horror">Horror</option>
                <option value="crime">Crime</option>
              </select>
            </label>
          </div>
          <div className="right-side">
            <label htmlFor="date">
              release date
              <br />
              <input
                type="date"
                id="date"
                value="Select Date"
              />
            </label>
            <label htmlFor="rating">
              rating
              <br />
              <input type="number" id="rating" />
            </label>
            <label htmlFor="runtime">
              runtime
              <br />
              <input type="number" id="runtime" placeholder="minutes" />
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
