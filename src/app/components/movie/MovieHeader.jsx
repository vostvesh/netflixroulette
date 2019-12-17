import React from 'react';

import './MovieHeader.css';

import MovieCounter from './MovieCounter';
import Filter from '../filter/Filter';

const MovieHeader = ({ moviesCount, activeFilter, onFilter }) => {
  return (
    <div className="movie-header">
      <div className="movie-header__counter">
        <MovieCounter count={moviesCount} />
      </div>
      <div className="movie-header__filter">
        <Filter
          title='sort by'
          buttonNames={['release date', 'rating']}
          handleFilter={onFilter}
          activeFilter={activeFilter}
        />
      </div>
    </div>
  );
};

export default MovieHeader;
