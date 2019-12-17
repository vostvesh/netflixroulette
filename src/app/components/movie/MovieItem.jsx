import React from 'react';

import './MovieItem.css';

import MovieImage from './MovieImage';
import MovieTitle from './MovieTitle';
import MovieYear from './MovieYear';
import MovieCategory from './MovieCategory';

const MovieItem = ({ title, date, category, imageSource}) => {

  return (
    <div className="movie-item">
      <div className="movie-item__image">
        <MovieImage imageSource={imageSource} />
      </div>
      <div className="movie-item__title-year">
        <MovieTitle title={title} />
        <MovieYear date={date} />
      </div>
      <div className="movie-item__category">
        <MovieCategory category={category} />
      </div>
    </div>
  );
};

export default MovieItem;