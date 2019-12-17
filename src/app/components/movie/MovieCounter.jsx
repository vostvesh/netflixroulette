import React from 'react';

const MovieCounter = ({ count }) => {
  return (
    <div className="movie-counter">
      <span className="movie-counter__count">{count} </span>
      <span className="movie-counter__text">movie found</span>
    </div>
  );
};

export default MovieCounter;